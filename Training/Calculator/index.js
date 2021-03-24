const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('==========================');
/* LET'S ENHANCE OUR CALCULATOR TO SUPPORT ALL ARITHMETIC
 OPERATORS i,e., +, -, * AND / USING IF CONSTRUCT. */

 console.log('Please enter the operator:');
 const response = readline.prompt();

 console.log('Please enter the first number:');
 const response1 = readline.prompt();
 console.log('Please enter the second number:');
 const response2 = readline.prompt();
 let answer;

 if (response == '+') {
     answer = +response1 + +response2;
     console.log('The answer is: ' + answer);
 } else if (response == '-') {
     answer = +response1 - +response2;
     console.log('The answer is: ' + answer);
 } else if (response == '*') {
     answer = +response1 * +response2;
     console.log('The answer is: ' + answer);
 } else if (response == '/') {
     answer = +response1 / +response2;
     console.log('The answer is: ' + answer);
 }
