const readline = require('readline-sync');
console.log('Welcome to the calculator!');
//TO MULTIPLY TWO NUMBERS AND PRINT OUT THE RESULT.
console.log('Please enter some input:');
const response1 = readline.prompt();
console.log('Please enter the second input:');
const response2 = readline.prompt();
console.log(+response1 * +response2); 
/*
(response1 * response2) will also work as strings are 
converted to numeric for all arithmetic operations except '+'.
*/