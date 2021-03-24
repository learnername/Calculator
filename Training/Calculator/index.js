const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('==========================');
/* LET'S ENHANCE OUR CALCULATOR TO SUPPORT ALL ARITHMETIC
 OPERATORS i,e., +, -, * AND / USING SWITCH. */

 console.log('Please enter the operator:');
 const response = readline.prompt();

 console.log('Please enter the first number:');
 const response1 = readline.prompt();
 console.log('Please enter the second number:');
 const response2 = readline.prompt();
 let answer;

 switch (response) {
    case '+':
       answer = +response1 + +response2;
        console.log('The answer is: ' + answer);
        break;
    case '-':
       answer = +response1 - +response2;
        console.log('The answer is: ' + answer); 
        break;
    case '*':
       answer = +response1 * +response2;
        console.log('The answer is: ' + answer);
        break;
    case '/':
       answer = +response1 / +response2;
        console.log('The answer is: ' + answer);
        break;
};
