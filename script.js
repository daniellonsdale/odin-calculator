const ceButton = document.querySelector("#ce");
const cButton = document.querySelector("#c");
const deleteButton = document.querySelector("#delete");
const divideButton = document.querySelector("#divide");
const sevenButton = document.querySelector("#seven");
const eigthButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const multiplyButton = document.querySelector("#multiply");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const subtractButton = document.querySelector("#subtract");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const addButton = document.querySelector("#add");
const plusMinusButton = document.querySelector("#plus-minus");
const zeroButton = document.querySelector("#zero");
const decimalButton = document.querySelector("#decimal");
const equalsButton = document.querySelector("#equals");
const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number");

let inputOne;
let inputTwo;
let operator;
let curDecimalCount = 0; 

display.textContent = 0;

function add(numOne, numTwo){
    return numOne + numTwo;
}

function subtract(numOne, numTwo){
    return numOne - numTwo;
}

function multiply(numOne, numTwo){
    return numOne * numTwo;
}

function divide(numOne, numTwo){
    return numOne/numTwo;
}

function operate(numOne, numTwo, oper){
    switch(oper){
        case "add":
            return add(numOne, numTwo);
            break;
        case "subtract":
            return subtract(numOne, numTwo);
            break;
        case "multiply":
            return multiply(numOne, numTwo);
            break;
        case "divide":
            return divide(numOne, numTwo);
            break;
        default:
            console.log("Error in operate function");
    }
}

numberButtons.forEach(function(button){
    button.addEventListener("click", () => {
        if (display.textContent == 0 && display.textContent.length <= 9){
            display.textContent = button.textContent;
        }else if(display.textContent.length <= 9){
            display.textContent += button.textContent;
        }
    });
});

decimalButton.addEventListener("click", () => {
    if (curDecimalCount == 0){
        display.textContent += ".";
        curDecimalCount++;
    }
});

ceButton.addEventListener("click", () => {
    display.textContent = 0;
});