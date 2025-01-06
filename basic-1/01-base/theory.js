// 1. Операторы
let a = 10;
let b = 5;
let c = 42;

c = c + a;
c = c - a;
c = c * a;
c = c / a;

c += a;
c -= a;
c *= a;
c /= a;

// 2. Типы данных
const owl = 100; // number
const name = "Owl"; // string
const isProgrammer2 = true; // boolean
let x; // undefined
null; // null
console.log(typeof null); // object
console.log(1 / x); // NaN
console.log(100 / 0); // Infinity

// 3.Приоритеты
const fullAge = 30;
const birthYear = 1980;
const currentYear = 2023;

// > < >= <=
const isFullAge = currentYear - birthYear >= fullAge;

const num10 = 42;
const num11 = "42";

console.log(num10 == num11); // true
console.log(num10 === num11); // false
