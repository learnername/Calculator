const readline = require('readline-sync');
function printWelcomeMessage() {
	console.log('Welcome to the calculator');
	console.log('=========================');
}

function checkValidInput(inputvalue){
    let a = +inputvalue;
    if (isNaN(a)){
        console.log('Please enter a valid number');
        const inputagain = readline.prompt();
        a = checkValidInput(inputagain);
    } else {
        return a;
    } return a;
}

function enterInput(operator) {
    console.log(`How many numbers do you want to ${operator} ?`);
    const numbers = readline.prompt();
    let operands = [];
    operands.length = +numbers;
    let i = 0;
    while (i < operands.length){
        console.log(`Please enter the number ${i+1} :`);
        const enteredvalue = readline.prompt(); 
        operands[i] = checkValidInput(enteredvalue);
        i++;
    }
    return operands;
}

function doCalculate(operator,operands){
    let answer;
    switch (operator){
        case '+':
            answer = 0;
            for (let i=0; i < operands.length; i++){
                answer = answer + operands[i];
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
return answer;
}


function performOneArithmeticCalculation() {
    console.log('Please enter the operator: ');
    const response = readline.prompt();
	const x = enterInput(response);
    const y = doCalculate(response,x);
    console.log(`The answer is : ${y}`);
    //performOneCalculation();
}

function performOneVowelCountingCalculation() {
    console.log('Please enter a string\n');
    const stringEntered = readline.prompt();
    const re = /[aeiou]/ig;
    const match = stringEntered.match(re);
    let i;
    let countVowels = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for(i = 0; i < match.length; i++){
        if((match[i] == 'A')||(match[i] == 'a')){
          countVowels.A += 1;
        }else if((match[i] == 'E')||(match[i] == 'e')){
          countVowels.E += 1;
        }else if ((match[i]=='I')||(match[i] == 'i')){
          countVowels.I += 1;;
        } else if ((match[i] == 'O')||(match[i] =='o')){
          countVowels.O += 1;
        } else if ((match[i] == 'U')||(match[i] == 'u')){
          countVowels.U += 1;
        }
      };
      console.log('The vowel counts are:');
      for (const property in countVowels) {
        console.log(`${property}: ${countVowels[property]}`);
      };      
}

function getCalculationMode() {
    console.log(`Which calculator mode do you want?
     1) Arithmetic
     2) Vowel Counting`);
    const mode = readline.prompt();
    return mode;
}

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();
while(true){
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE){
        performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }
}
