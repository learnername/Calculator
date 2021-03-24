const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('==========================');
/* ENHANCEMENT TO THE CALCULATOR TO PERFORM OPERATION ON ANY 
NUMBER OF NUMBERS. */

console.log('Please enter the operator:');
const response = readline.prompt();
console.log('How many numbers do you want to ' + response + '?');
const numbers = readline.prompt();
let operands = [];
operands.length = numbers;
for (let i = 0; i < operands.length; i++){
 console.log('please enter the number ' + (i+1) + ':');
 operands[i] = readline.prompt();  
}

let answer;
switch (response){
    case '+':
        answer = 0;
        for (let i=0; i < operands.length; i++){
            answer = answer + +operands[i];
        }
        break;
    case '-':
        answer = operands[0];
        for (let i=1; i<operands.length; i++){
            answer = answer - operands[i];
        }
        break;
    case '*':
        answer = 1;
        for (let i=0; i<operands.length; i++){
            answer = answer * operands[i];
        }
        break;
    case '/':
        answer = operands[0];
        for (let i=1; i<operands.length; i++){
            answer = answer/operands[i];
        }
        break;
}
console.log('The answer is: ' + answer);
