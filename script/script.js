//variables for each number
let zeroBtn = document.getElementById('calc__0');
let oneBtn = document.getElementById('calc__1');
let twoBtn = document.getElementById('calc__2');
let threeBtn = document.getElementById('calc__3');
let fourBtn = document.getElementById('calc__4');
let fiveBtn = document.getElementById('calc__5');
let sixBtn = document.getElementById('calc__6');
let sevenBtn = document.getElementById('calc__7');
let eightBtn = document.getElementById('calc__8');
let nineBtn = document.getElementById('calc__9');
//variables for some operation
let decimalBtn = document.getElementById('calc__decimal');
let backspaceBtn = document.getElementById('calc__backspace');
let clearBtn = document.getElementById('calc__clear');
let displayOnScreen = document.getElementById('calc-display-val');

//variables for numbers and operators

let calNumBtns = document.getElementsByClassName('calc-btn-num');
let calOperatorBtns = document.getElementsByClassName('calc-operator');

//display click on screen
let displayValue = '0';
let pendingValue;
let evalStringArray = [];
//function that handle the updateCalcScreen.
const updateCalcScreen = (clickValue) => {
    let btnNum = clickValue.target.innerText;
    if (displayValue === '0')
        displayValue = "";
    displayValue += btnNum;
    displayOnScreen.innerHTML = displayValue;

}

//looping through each numbers

for (let i = 0; i < calNumBtns.length; i++) {
    calNumBtns[i].addEventListener('click', updateCalcScreen, false)
}
//looping through each operator

//clearing the typed values

clearBtn.onclick = () => {
    displayValue = "0";
    pendingValue = undefined;
    evalStringArray = [];
    displayOnScreen.innerHTML = displayValue;

}

backspaceBtn.onclick = () => {
    let lengthOfDisplayValue = displayValue.length;
    displayValue = displayValue.slice(0, lengthOfDisplayValue - 1);
    if (displayValue === '0');
    displayOnScreen.innerHTML = displayValue;
}
decimalBtn.onclick = () => {
    if (!displayValue.includes('.'))
        displayValue += '.';
    displayOnScreen.innerHTML = displayValue;
}