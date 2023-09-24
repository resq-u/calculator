
const container = document.querySelector('#container');
const displayContainer = document.querySelector('#display-container');
const interactionContainer = document.querySelector('#interaction-container');
const numbersContainer = document.querySelector('#numbers-container');
const operatorsContainer = document.querySelector('#operators-container');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.op');

let firstNumber = '';
let operator = '';
let secondNumber = '';

displayNumbers();
clearDisplay();
getOperator();
calculate();

function add(a, b){
    let sum = +a + +b;
    if (sum.toString().split('.')[0].length > 11) {
        return displayContainer.textContent = sum.toExponential(3);
    }
    return displayContainer.textContent = sum.toString().slice(0, 11);
};

function subtract(a, b){
    let difference = a - b;
    if (difference.toString().split('.')[0].length > 11) {
        return displayContainer.textContent = difference.toExponential(3);
    }
    return displayContainer.textContent = difference.toString().slice(0, 11);
}

function multiply(a, b){
    let product = a * b;
    if (product.toString().split('.')[0].length > 11) {
        return displayContainer.textContent = product.toExponential(3);
    }
    return displayContainer.textContent = product.toString().slice(0, 11);
}

function divide(a, b){
    let quotient = a / b;
    if (quotient.toString().split('.')[0].length > 11) {
        return displayContainer.textContent = quotient.toExponential(3);
    }
    if (b == 0) return displayContainer.textContent = "lmao";
    return displayContainer.textContent = quotient.toString().slice(0, 11);
}

function operate(op, first, second){  
    if (op === '+') return add(first, second);
    if (op === '-') return subtract(first, second);
    if (op === '*') return multiply(first, second);
    if (op === '/') return divide(first, second);
}

function displayNumbers(){

    numberButtons.forEach(btn => {
       let currentNumber = btn.textContent;
       btn.addEventListener('click', () => {
            
            if (operator === '') {
                if (firstNumber.toString().length > 10) return;
                firstNumber += currentNumber; // 1st phase
                displayContainer.textContent += currentNumber;
            } else if (operator !== '') {
                    if (secondNumber === '') {  
                        displayContainer.textContent = `${secondNumber += currentNumber}`;
                        // clears the previous number from the display to prevent overflow
                        // by placing first secondNumber
                    } else if (secondNumber !== '') {
                        if (secondNumber.toString().length > 10) return;
                        secondNumber += currentNumber; // 3rd phase
                        displayContainer.textContent += currentNumber;
                    }
            }
        });
    });
}

function clearDisplay(){
    const clearBtn = document.querySelector('#clear');

    clearBtn.addEventListener('click', () => {
        displayContainer.textContent = '\u00A0';
            firstNumber = '';
            secondNumber = '';
            operator = '';
        });
}

function getOperator(){
    
    operatorButtons.forEach(btn => {

        btn.addEventListener('click', () => {
            if (operator === '') {
                operator = btn.textContent;
                displayContainer.textContent += btn.textContent;
            } else if (operator !== '' && secondNumber !== ''){
                    displayContainer.textContent = '\u00A0';
                    firstNumber = operate(operator, firstNumber, secondNumber);  // 4th phase
                    secondNumber = '';
                    operator = btn.textContent;
                    displayContainer.textContent += btn.textContent;
            }
        });
    });
}

function calculate() {
    const equalsButton = document.querySelector('#calculate');

        equalsButton.addEventListener('click', () => {
            if (operator !== '') {
            displayContainer.textContent = '\u00A0';
            firstNumber = operate(operator, firstNumber, secondNumber);  // 4th phase
            secondNumber = '';
            operator = '';
            }
        }); 
        
}

