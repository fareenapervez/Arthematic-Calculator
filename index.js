#! /usr/bin/env node
import inquirer from "inquirer";
// Asking questions from user through inquirer
let input = await inquirer.prompt([
    { message: "enter first Number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select the operation you want to perform with operands",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
// Condiotional Statments
if (input.operator === "Addition") {
    console.log(input.firstNumber + input.secondNumber);
}
else if (input.operator === "Subtraction") {
    console.log(input.firstNumber - input.secondNumber);
}
else if (input.operator === "Multiplication") {
    console.log(input.firstNumber * input.secondNumber);
}
else if (input.operator === "Division") {
    console.log(input.firstNumber / input.secondNumber);
}
else {
    console.log("Invalid Input");
}
