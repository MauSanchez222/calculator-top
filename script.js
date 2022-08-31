let num1 = 0;
let num2 = 0;
let op;
let operated = false;
let hasOperator = false;
const allNrs = document.querySelectorAll('.number');
const allOps = document.querySelectorAll('.op');
const dispBar = document.getElementById('numbers-display');
const btnEquals = document.getElementById('btn-eq');
const btnClear = document.getElementById('btn-clear')


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
        dispBar.innerHTML = addNumbers(nr1, nr2)
    }
    else if(operator === '-'){
        dispBar.innerHTML = subtractNumbers(nr1,nr2)    
    }
    else if(operator === '÷'){
        dispBar. innerHTML = divideNumbers(nr1,nr2)
    }
    else{
        dispBar.innerHTML = multiplyNumbers(nr1,nr2)
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


btnEquals.addEventListener('click', () => getResult())
