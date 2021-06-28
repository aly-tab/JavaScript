var isOperating = false;
var number1 = 0;
var number2 = 0;

var newNumber = document.querySelector('#display');

function press(num) {
    if (isOperating === false) {
        if (number1 === 0) {
            number1 = num;
            newNumber.innerHTML = number1;
        } else if (num === '.') {
            number1 = number1 + ".";
            newNumber.innerHTML = number1;
        } else {
            number1 = number1 + num;
            newNumber.innerHTML = number1;
        }
    } else {
        if (number2 === 0) {
            number2 = num;
            newNumber.innerHTML = number2;
        } else if (num === '.') {
            number2 = number2 + ".";
            newNumber.innerHTML = number2;
        } else {
            number2 = number1 + num;
            newNumber.innerHTML = number2;
        } 
    }
}

var operation;

function setOP(op) {
    if (operation !== null) {
        operation = op;
        isOperating = !isOperating
    }
}

function calculate() {
    if (operation === '+') {
        var add = number1 + number2;
        newNumber.innerHTML = add;

    } else if (operation === '-') {
        var sub = number1 - number2;
        newNumber.innerHTML = sub;
    } else if (operation === '*') {
        var multi = number1 * number2;
        newNumber.innerHTML = multi;
    } else if (operation === '/') {
        var div = number1 / number2;
        newNumber.innerHTML = div;
    } 
    isOperating = false;
}

function clr() {
    number1 = 0;
    number2 = 0;
    newNumber.innerHTML = 0;
    isOperating = false;
}
