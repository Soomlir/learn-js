// 1. Переменные
let num = 42; // number
let firstName = "Katya"; // string
const isProgrammer = true; // boolean

firstName = "Max";

let $ = "test";
let $num = 42;
let num$ = 42;
let _ = 49;
let _num = 13;
let num_ = 7;

let first_name = "Ksusha";
let myNum = 100;
let num42 = 10;

// Нельзя именовать переменные с цифры, использовать зарезервированные слова, писать через -.
// Имя переменной должно начинаться с буквы, _, $.

// 2. Операторы

// alert($);
// console.log($);

console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10);

let num2 = num + 10;
console.log(num, num2); // 42 52

num = num2 - num; // 10
num2 = num2 + 1;

let num3 = num + (10 * 2) / 3 - 1; // 45

const fullName = firstName + " Owl";

// 3. Калькулятор

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const submitBtn = document.getElementById("btn-submit");
let action = "+";

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  return actionSymbol == "+" ? num1 + num2 : num1 - num2;

  // if (actionSymbol == '+') {
  //   return num1 + num2;
  // }

  // if (actionSymbol == '-') {
  //   return num1 - num2;
  // }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
  // if (action == '+') {
  //   const sum = Number(input1.value) + Number(input2.value);
  //   printResult(sum);
  // } else if (action == '-') {
  //   const sum = Number(input1.value) - Number(input2.value);
  //   printResult(sum);
  // }
};
