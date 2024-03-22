#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
{ message: "Enter 1st number", 
type: "number", 
name: "first Number" },

{message: "Enter 2nd number",
 type: "number", 
 name: "second Number"},

{message: "select one of the operator's to perform operation",
 type: "list",
 name: "operator", 

choices: ["Addition", "substraction", "multiplication", "Division"]
},
]);

// if else statement use

if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);

}else if(answer.operator === "substraction"){
    console.log(answer.firstNumber - answer.secondNumber);

}else if(answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);

}else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
    console.log("please select valid operator")
}
   