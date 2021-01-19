//each numbers variables
let oneBtn = document.getElementById('calc__1');
let twoBtn = document.getElementById('calc__2');
let threeBtn = document.getElementById('calc__3');
let fourBtn = document.getElementById('calc__4');
let fiveBtn = document.getElementById('calc__5');
let sixBtn = document.getElementById('calc__6');
let sevenBtn = document.getElementById('calc__7');
let eigthBtn = document.getElementById('calc__8');
let nineBtn = document.getElementById('calc__9');
let zeroBtn = document.getElementById('calc__0');


//non operator variables
let clearBtn = document.getElementById('calc__clear');
let backspaceBtn = document.getElementById('calc__backspace');
let decimalBtn = document.getElementById('calc__decimal');
let displayElement = document.getElementById('calc-display-val');



let displayVal = '0';
let pendingVal;
let evalStringArray = [];

let calcNumBtns = document.getElementsByClassName('calc-btn-num');
let calcOperatorBtns = document.getElementsByClassName('calc-operator')

let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;
    if (displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayElement.innerText = displayVal;
}
const performOperator = (clickObj) => {
    let operator = clickObj.target.innerText;
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayElement.innerHTML = displayVal;
            evalStringArray = [];
            break;
        case '%':
            pendingVal = (displayVal);
            displayVal = '0';
            displayElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('%');
            break;
        default:
            break;
    }
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false)
}
for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', performOperator, false);

}

//clearing display value
clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    eValStringArray = [];
    displayElement.innerHTML = displayVal;

}
backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    if (displayVal === '0');
    displayElement.innerHTML = displayVal;

}
decimalBtn.onclick = () => {
    if (!displayVal.includes('.'))
        displayVal += ".";
    displayElement.innerHTML = displayVal;
}