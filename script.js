let equation = {
    num1: [],
    num2: [],
    operation: undefined
}

function createNumber() {
    const operand1 = parseInt(equation.num1.join(''));
    const operand2 = parseInt(equation.num2.join(''));
    const operation = equation.operation;
    switch (operation) {
        case '+':
            console.log(operand1+operand2);
            break;
        case '-':
            console.log(operand1-operand2);
            break;
        case 'x':
            console.log(operand1*operand2);
            break;
        case '%':
            console.log(operand1/operand2);
            break;
    }
}

function gatherInput(input) {
    console.log(input);
    if (input >= '0' && input <= '9') 
        if (equation.operation == undefined)
            equation.num1.push(input);
        else
            equation.num2.push(input);
    
    if (input == '+' || input == 'x' 
    ||  input == '-' || input == '%') {
        equation.operation = input;
    }

    if (input == '=') {
        if (isEquation) {
            createNumber();
        }
    }
    


}

const isEquation = function () {
    let success = true;
    if (num1.length == 0)
        success = false;
    if (num2.length == 0)
        success = false;
    if (operation == undefined)
        success = false;
    return success;
}


function initNumKeys(){
    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    const num3 = document.querySelector('#num3');
    const num4 = document.querySelector('#num4');
    const num5 = document.querySelector('#num5');
    const num6 = document.querySelector('#num6');
    const num7 = document.querySelector('#num7');
    const num8 = document.querySelector('#num8');
    const num9 = document.querySelector('#num9');
    const num0 = document.querySelector('#num0');
    const multiply = document.querySelector('#multiply')
    const divide = document.querySelector('#divide')
    const add = document.querySelector('#add')
    const subtract = document.querySelector('#subtract')
    const enter = document.querySelector('#enter')

    num1.addEventListener('click', () => {gatherInput('1')})
    num2.addEventListener('click', () => {gatherInput('2')})
    num3.addEventListener('click', () => {gatherInput('3')})
    num4.addEventListener('click', () => {gatherInput('4')})
    num5.addEventListener('click', () => {gatherInput('5')})
    num6.addEventListener('click', () => {gatherInput('6')})
    num7.addEventListener('click', () => {gatherInput('7')})
    num8.addEventListener('click', () => {gatherInput('8')})
    num9.addEventListener('click', () => {gatherInput('9')})
    num0.addEventListener('click', () => {gatherInput('0')})
    multiply.addEventListener('click', () => {gatherInput('x')})
    divide.addEventListener('click', () => {gatherInput('%')})
    add.addEventListener('click', () => {gatherInput('+')})
    subtract.addEventListener('click', () => {gatherInput('-')})
    enter.addEventListener('click', () => {gatherInput('=')})

}

function initButtons(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('mousedown', () => {
            button.style.backgroundColor = '#2a5148';
        })
        document.addEventListener('mouseup', () => {
            button.style.backgroundColor = '#478778';
        })
    } )
}

function init() {
    initNumKeys();
    initButtons();

}



// main process
init();