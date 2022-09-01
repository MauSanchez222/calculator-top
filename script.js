let num1 = NaN;
let num2 = NaN;
let op;
let operated = false;
let hasOperator = false;
const allNrs = document.querySelectorAll('.number');
const allOps = document.querySelectorAll('.op');
const dispBar = document.getElementById('numbers-display');
const btnEquals = document.getElementById('btn-eq');
const btnClear = document.getElementById('btn-clear');
const btnBack = document.getElementById('btn-back');


function addNumbers(nr1,nr2){
    return nr1 + nr2
}

function subtractNumbers(nr1,nr2){
    return nr1 - nr2
}

function multiplyNumbers(nr1, nr2){
    return nr1 * nr2
}

function divideNumbers(nr1, nr2){
    if (nr2 === 0){
        return 'Can\'t divide by zero'
    }
    return nr1 / nr2
}

function clearDisplay(){
    dispBar.innerHTML = '';
}

function operate(nr1, nr2, operator){
    if (operator === '+'){
        dispBar.innerHTML = Math.round(addNumbers(nr1, nr2) * 100)/100
    }
    else if(operator === '-'){
        dispBar.innerHTML = Math.round(subtractNumbers(nr1,nr2) * 100)/100   
    }
    else if(operator === '÷'){
        dispBar. innerHTML = Math.round(divideNumbers(nr1,nr2) * 100)/100 
    }
    else{
        dispBar.innerHTML = Math.round(multiplyNumbers(nr1,nr2) * 100)/100
    }

}

function getNumbers(){
    let numbers = dispBar.innerHTML.split(op);
    num1 = Number(numbers[0]);
    num2 = Number(numbers[1]);
}

function getResult(){
    getNumbers();
    clearDisplay();
    operate(num1,num2,op);
    operated = true;
    hasOperator = false;
}

function removeLast(){
    let last = dispBar.innerHTML.split('').splice(-1,1); //gets last element from the display as an array of 1 element
    if (last[0] === '+' || last[0] === '-' || last[0] === '÷' || last[0] === 'x' ){
        hasOperator = false;
    };
    dispBar.innerHTML = dispBar.innerHTML.split('').slice(0,-1).join(''); //turns display content into an array, removes last element and puts it back together
}

allNrs.forEach((item) => item.addEventListener('click', () => {
    if (operated === true){
        clearDisplay()
    }
    dispBar.append(item.innerHTML);
    operated = false;
}));


allOps.forEach((item) => item.addEventListener('click', () => {
    if (hasOperator === true){
        getResult()
    }
    dispBar.append(item.innerHTML);
    op = item.innerHTML
    operated = false;
    hasOperator = true;
}));


btnClear.addEventListener('click', () => clearDisplay());

btnEquals.addEventListener('click', () => {
    getResult();
    if (Number.isNaN(num2) === true){
        dispBar.innerHTML = 'Syntax Error';
    }
    num1 = NaN;
    num2 = NaN;
})

btnBack.addEventListener('click', () => removeLast())