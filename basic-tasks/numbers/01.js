// 1. Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
let number = 2;

if (number < 0) {
  console.log("Отрицательное");
}

// Метод Math.sign() возвращает знак числа, указывающий на то,
// является ли число отрицательным, положительным или нулём.
// Метод может вернуть одно из пяти значений: 1, -1, 0, -0 и NaN,
// которые представляют, соответственно «положительное число»,
// «отрицательное число», «положительный ноль», «отрицательный ноль» и NaN.


// 2. Дано число. Проверьте, четное оно или нет.
let _number = 7;

if (_number % 2 === 0) {
  console.log("Чётное");
} else {
  console.log("Не чётное");
}


// 3. Дано число. Выведите в консоль первую цифру этого числа. 
let number_ = 747;
// console.log(Number(String(number_)[0])); - 7


// 4. Дано число. Выведите в консоль последнюю цифру этого числа. 
const num1 = 1357.579;
const lastDigit1Str = String(num1).slice(-1); // 👉️ '9'
const lastDigit1Num = Number(lastDigit1Str); // 9


// 5. Дано число. Выведите в консоль сумму первой и последней цифры этого числа. 
const num2 = 2417;
const num2Str = String(num2);
// console.log(Number(num2Str[0]) + Number(num2Str.slice(-1)));


// 6. Дано число. Выведите количество цифр в этом числе. 
const num3 = 1234;
// console.log(String(num3).length);

// 7. Даны два числа. Проверьте, что первые цифры этих чисел совпадают. 
let n1 = 1000;
let n2 = 10;
console.log(String(n1).startsWith(n2));

// 8. Даны два целых числа. Проверьте, что первое число без остатка делится на второе. 
let n3 = 4000;
let n4 = 40;
let log = console.log;

n3 % n4 === 0 ? log('Делится на второе без остатка') : log('Не делится на второе без остатка');

// 9. Выведите в консоль все целые числа от 1 до 100. 
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// 10. Выведите в консоль все целые числа от -100 до 0. 
// for (let i = -100; i <= 0; i++) {
//   console.log(i);
// }

// 11. Выведите в консоль все целые числа от 100 до 1.
// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// 12. Выведите в консоль все четные числа из промежутка от 1 до 100. 
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 13. Выведите в консоль все числа кратные трем в промежутке от 1 до 100. 
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// 14. Найдите сумму всех целых чисел от 1 до 100. 
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// 15. Найдите сумму всех целых четных чисел в промежутке от 1 до 100. 
// let sum = 0; 
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 16. Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// let sum = 0; 
// for (let i = 1; i <= 100; i+= 2) {
//   sum += i;
// }
// console.log(sum);

// 17. Даны два целых числа. Найдите остаток от деления первого числа на второе. 
// let num1 = 100;
// let num2 = 11;
// console.log(num1 % num2);
