#!/usr/bin/env node
import  inquirer from "inquirer"
import chalk from "chalk"
class Student{
    name : string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}
const persons = new Person()

const programStart = async (persons: Person)=>{
do{
    console.log(chalk.greenBright("WelCome My Dear Guest!"));

    let answer = await inquirer.prompt(
        [
            {
                type:"list",
                message:chalk.magenta('Whom would you like to talk?'),
                name:"select",
                choices:["Student","Yourself","Nobody"]
            } 
        ]
    );
    if(answer.select == "Student" ){
       let answer = await inquirer.prompt(
        [
            {
                type:"input",
                name:"student",
                message:chalk.green("You are Extrovert so Kindly Enter Student's Name You want to Converse:")
            }
        ]
       );
       const student = persons.students.find(val => val.name == answer.select)
       
        
    if (!student){
        const name = new Student(answer.student)
        persons.addStudent(name)
        console.log(chalk.blue(`Hello! I am ${name.name}.Nice to meet you.`));
        console.log(chalk.red('New Student Added Successfully.'));
        console.log(chalk.cyan(`Current Student list:`));
        console.log(persons.students);
       }
       
    }else if(answer.select == "Yourself"){
        console.log(chalk.cyanBright('Hello Dear! You are Introvert.'));
        
    }else if(answer.select == "Nobody") {
        console.log(chalk.red('Exitting the Program....'));
        
        
    }
    
}while(true)
}
programStart(persons)

