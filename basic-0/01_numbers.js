// 1. Number
const num = 42;
const float = 42.42;

const pow = 10e3; // возведение в степень - 10000 - 10 в 3 степени

console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
console.log("Math.pow 53", Math.pow(2, 53) - 1); // == MAX_SAFE_INTENGER
console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
console.log("MAX_VALUE", Number.MAX_VALUE);
console.log("MIN_VALUE", Number.MIN_VALUE);
console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
console.log("1 / 0", 1 / 0); // Infinity
console.log(Number.NaN); // Not A Number
console.log(typeof NaN); // number
console.log("2 / undefined", 2 / undefined); // NaN

let num2 = 10;
console.log(Number.isNaN(num2)); // false
console.log(Number.isFinite(42)); // true

const stringInt = "42";
const stringFloat = "42.42";
console.log(stringInt + 2); // 422 - строка
console.log(Number.parseInt(stringInt) + 2); // 44 число
console.log(parseInt(stringInt) + 2); // 44 - число
console.log(Number(stringInt) + 2); // 44 - число
console.log(+stringInt + 2); // 44 - число

console.log(parseInt(stringFloat) + 2); // parseInt работает с int, с float откидывает дробную часть
console.log(parseFloat(stringFloat) + 2); // 44.42
console.log(+stringFloat + 2); // 44.42

console.log(0.4 + 0.2); // 0.6000000000001
console.log((0.4 + 0.2).toFixed(1)); // string
console.log(+(0.4 + 0.2).toFixed(1)); // number
console.log(parseFloat((0.4 + 0.2).toFixed(1))); // number

// 2. BigInt
console.log(99532928395823n - 3432432432n);
console.log(-332432423n);
// console.log(421421421.2121n) - error

// console.log(10n - 4); // error
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));
console.log(5n / 2n); // 2n

// 3. Math
console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25)); // 5
console.log(Math.pow(3, 2)); // 9
console.log(Math.abs(-42));
console.log(Math.max(42, 11, 5, 6, 4)); // 42
console.log(Math.min(42, 11, 2, 3, 5, 7)); // 2
console.log(Math.floor(4.9)); // в меньшую  == 4
console.log(Math.round(4.9)); // 5
console.log(Math.trunc(4.9)); // 4
console.log(Math.random());

// 4. Example
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomBetween(3, 7));
