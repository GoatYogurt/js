var expression = '';
var screen = document.getElementById('screen');
var prev = '';
var operand = true;
var num = '';

function update(s) {
    if (s === '%') {
        expression += '/100';
        calculate();
        return;
    }

    if (s == '+' || s == '-' || s == '*' || s == '/') {
        num = '';
    } else {
        num += s;
    }

    screen.innerHTML = num;
    expression += s;
    prev = num;
}

function calculate() {
    screen.innerHTML = eval(expression);
    expression = '';
    num = '';
}

function clear_() {
    screen.innerHTML = '0';
    expression = '';
    num = ''
}

function clearEntry() {
    expression = expression.slice(0, expression.length - prev.length);
    screen.innerHTML = '0';
}

function opposite() {
    num = String(-parseInt(num));
    expression = expression.slice(0, expression.length - num.length + 1) + num;
    screen.innerHTML = num;
}