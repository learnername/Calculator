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
    console.log('How many numbers do you want to ' + operator + '?');
    const numbers = readline.prompt();
	let operands = [];
	operands.length = +numbers;
	let i = 0;
	while (i < operands.length){
	    console.log('please enter the number ' + (i+1) + ':');
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

function performOneCalculation() {
	console.log('Please enter the operator: ');
	const response = readline.prompt();
	const x = enterInput(response);
	const y = doCalculate(response,x);
	console.log('The answer is: ' + y);
	//performOneCalculation();
}
		
printWelcomeMessage();
while(true){
	performOneCalculation();
}
