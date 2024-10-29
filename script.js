const ceButton = document.querySelector("#id");
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
const displayButton = document.querySelector("#display");

let displayValue = 0;
let inputOne;
let inputTwo;
let operator; 

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

