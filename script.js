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
    return a / b;
}

let firstValue = '';
let operator = '';
let secondValue = '';

function operate(firstValue, secondValue, operator){
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);
    switch(operator){
        case '+':
            return add(firstValue, secondValue);
        case '-':
            return subtract(firstValue, secondValue);
        case '*':
            return multiply(firstValue, secondValue);
        case '/':
            return divide(firstValue, secondValue);
    }
}

const digitButtons = document.querySelectorAll('.digit');
const display = document.querySelector('.display');

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
        if(firstValue.length > 0){
            operator = e.target.textContent
            updateDisplay();
        }
    }

function handleEqualsClick(){
    if (firstValue.length > 0 && secondValue.length > 0){
    }
}

function updateDisplay(){
    display.textContent = firstValue + operator + secondValue;
}

digitButtons.forEach(button => {
    button.addEventListener('click', handleDigitClick);
});