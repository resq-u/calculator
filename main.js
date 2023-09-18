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
    if (op === "+") return add(first, second);
    if (op === "-") return subtract(first, second);
    if (op === "*") return multiply(first, second);
    if (op === "/") return divide(first, second);
}