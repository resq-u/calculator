
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
    return displayContainer.textContent = +a + +b;
};

function subtract(a, b){
    return displayContainer.textContent = +a - +b;
}

function multiply(a, b){
    return displayContainer.textContent = a * b;
}

function divide(a, b){
    return displayContainer.textContent = a / b;
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
            displayContainer.textContent += currentNumber;

            if (operator === '') {
                firstNumber += currentNumber; // 1st phase

            } else if (operator !== '') { 
                secondNumber += currentNumber; // 3rd phase

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
            } else {
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
    const equalsButton = document.querySelector('#calculate')   

        equalsButton.addEventListener('click', () => {
            if (operator !== '') {
            displayContainer.textContent = '\u00A0';
            firstNumber = operate(operator, firstNumber, secondNumber);  // 4th phase
            secondNumber = '';
            operator = '';
            }
        }); 
        
}
