function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0){
        return 'Undefined';
    }
    else return a / b;
}

let firstValue = '';
let operator = '';
let secondValue = '';

function operate(firstValue, secondValue, operator){
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);
    if (isNaN(firstValue) || isNaN(secondValue)){
        return 'Error';
    }
    switch(operator){
        case '+':
            return add(firstValue, secondValue);
        case '-':
            return subtract(firstValue, secondValue);
        case '*':
            return multiply(firstValue, secondValue);
        case '/':
            return divide(firstValue, secondValue);
        default:
            return 'Error';
    }
}

const digitButtons = document.querySelectorAll('.digit');
const display = document.querySelector('.display');
const equalButton = document.querySelector('.equal');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');


function handleDigitClick(e){
    if (operator === '') {
        firstValue += e.target.textContent;
    }
    else {
        secondValue += e.target.textContent;
    }
    updateDisplay();
}
function handleOperatorClick(e){
    if (firstValue.length > 0 && secondValue.length > 0 && operator != ''){
        let result = operate(firstValue, secondValue, operator);
        firstValue = result;
        operator = e.target.textContent;
        secondValue = '';
    }
    else if(firstValue.length > 0){
        operator = e.target.textContent
    }
    updateDisplay();
}

function handleEqualsClick(){
    if (firstValue.length > 0 && secondValue.length > 0 && operator != ''){
        let result =  operate(firstValue, secondValue, operator);
        firstValue = result;
        secondValue = '';
        operator = '';
        updateDisplay();
    }
}

function handleClearClick(){
    firstValue = '';
    secondValue = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = `${firstValue} ${operator} ${secondValue}`.trim();
}

clearButton.addEventListener('click', handleClearClick);

digitButtons.forEach(button => {
    button.addEventListener('click', handleDigitClick);
});

equalButton.addEventListener('click', handleEqualsClick);

operatorButtons.forEach(button => {
    button.addEventListener('click', handleOperatorClick);
});

