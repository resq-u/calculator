
const container = document.querySelector('#container');
const displayContainer = document.querySelector('#display-container');
const interactionContainer = document.querySelector('#interaction-container');
const numbersContainer = document.querySelector('#numbers-container');
const operatorsContainer = document.querySelector('#operators-container');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.op');

displayNumbers();
clearDisplay();

let firstNumber;
let operator;
let secondNumber;


function add(a, b){
    return +a + +b;
};

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
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
           if (operator === undefined) {
            firstNumber += currentNumber;
            console.log(firstNumber);//last
           } else if (operator !== undefined) {
            secondNumber +=currentNumber;
            console.log(secondNumber);// last
           }
        });
    });
}
//last
function clearDisplay(){
    const clearBtn = document.querySelector('#clear');

    clearBtn.addEventListener('click', () => {
        displayContainer.textContent = '\u00A0';
        firstNumber = 0;
        secondNumber = 0;
    });
}
