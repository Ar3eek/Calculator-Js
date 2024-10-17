const  firstNumber = document.querySelector('#firstNumber');
const  secondNumber = document.querySelector('#secondNumber p');
const mathSign = document.querySelector('#mathSign');
const numberButton = document.querySelectorAll('#number');
const operatorButton = document.querySelectorAll('#operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const clearLast =document.querySelector('#clearLast');
let accumulator = '';
const allbuttons = document.querySelectorAll('#buttons');


function displayNumber () {
    if(this.textContent === '.' && firstNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && firstNumber.innerHTML === '' ) return firstNumber.innerHTML= '0.'

    firstNumber.innerHTML+= this.textContent;


}

function operate () {
    if(firstNumber.innerHTML === '' && this.textContent === '-' ) {
        firstNumber.innerHTML = '-';
        return;
    }
    else if (firstNumber.innerHTML === '') {
        return;
    }
    if (mathSign.innerHTML !== '') {
        showAccumulator();
    }
    secondNumber.innerHTML = firstNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    firstNumber.innerHTML ='';


}

function showAccumulator () {
    if (secondNumber.innerHTML === '' || firstNumber === '') return;

    let a = Number(firstNumber.innerHTML);
    let b = Number(secondNumber.innerHTML);
    let operator = mathSign.innerHTML;
    let accumulator = '';    


    switch (operator) {
        case '+':
            accumulator = a + b;
            break;
        case '-':
            accumulator = b - a;
            break;
        case '*':
            accumulator = a * b;
            break;
        case '/':
            accumulator = b / a;
            break;
        case '%':
            accumulator = a % b;
            break;

    }
    firstNumber.innerHTML = accumulator;
    secondNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function clearScreen () {
    accumulator = '';
    firstNumber.innerHTML = '';
    secondNumber.innerHTML = '';
    mathSign.innerHTML = '';

}

function backspace() {
    let oneNumber = firstNumber.innerHTML;
    if (oneNumber.length > 0) {
        let lastChar = oneNumber.charAt(oneNumber.length - 1);
        if (lastChar === '.') {
            firstNumber.innerHTML = oneNumber.slice(0, -1);
        } else {
            firstNumber.innerHTML = oneNumber.slice(0, -1);
            if (oneNumber.charAt(oneNumber.length -2) === '.' ) {
                firstNumber.innerHTML = oneNumber.slice(0, -2);
            }
        }

    }
    if (firstNumber.innerHTML.length === 0 || firstNumber.innerHTML === '-') {
        firstNumber.innerHTML = '0';
    }
}


function moveAllButtons(event) {
    let key = event.keyCode;

}

//Nasłuchiwanie
numberButton.forEach((buttons) => buttons.addEventListener('click', displayNumber));
operatorButton.forEach((buttons) => buttons.addEventListener('click', operate));
equals.addEventListener('click', showAccumulator );
clear.addEventListener('click', clearScreen)
clearLast.addEventListener('click', backspace);
allbuttons.forEach((buttons) => buttons.addEventListener('keydown', moveAllButtons));
















