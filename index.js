let num1 = 8;
let num2 = 2;
let num3 = 0;
num1 = window.prompt("Enter first number: ");
num2 = window.prompt("Enter second number: ");
num1 = parseInt(num1);
num2 = parseInt(num2);
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add() {
    num3 = num1 + num2;
    sumEl.textContent = "Sum: " + num3;
}

function subtract() {
    num3 = num1 - num2;
    sumEl.textContent = "Subtract: " + num3;
}

function multiply() {
    num3 = num1 * num2;
    sumEl.textContent = "Multiply: " + num3;
}

function divide() {
    num3 = num1 / num2;
    sumEl.textContent = "Divide: " + num3;
}