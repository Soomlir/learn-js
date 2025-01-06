// 1. Number
const num = 42; // integer
const num2 = 42.42; // float
const pow = 10e3; // 10 в 3 степень - 10000
const big = 1000000;
const big2 = 1_000_000;

console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1 / 0); // Infinity
console.log(Number.isFinite(1 / 0)); // false
console.log(22 / undefined); // NaN

const weird = 22 / undefined;
console.log(Number.isNaN(weird)); // true
console.log(Number.isNaN(10)); // false

const strInt = "42";
const strFloat = "42.42";

console.log(Number(strInt)); // 42
console.log(Number(strFloat)); // 42.42

console.log(Number.parseInt(strInt)); // 42
console.log(Number.parseInt(strFloat)); // 42
console.log(Number.parseFloat(strFloat)); // 42.42

console.log(+strInt, +strFloat); // 42 42.42

console.log(0.1 + 0.2); // 0.3000000000000004
console.log((0.1 + 0.2).toFixed(1)); // 0.3 - возвращает строку
console.log(+(0.1 + 0.2).toFixed(1)); // 0.3 - number

// 2. BigInt
// BigInt - работает только с BigInt, не может быть float
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 9432432n);
console.log(-42n);
console.log(10n - BigInt(4));
console.log(5n - 2n); // 2 - BigInt - целочисленный тип

// 3. Math
console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.abs(-42)); // 42
console.log(Math.max(2, 5, 42, 199, 0)); // 199
console.log(Math.min(10, 1, 100, 2231, 11)); // 1

console.log(Math.floor(4.9)); // округление всегда в меньшую сторону - 4
console.log(Math.ceil(4.9)); // округление всегда в большую сторону - 5
console.log(Math.round(4.5)); // округляние до ближайшего целочисленного значения - 5
console.log(Math.trunc(4.5));

console.log(Math.random()); // возвращает случайное значение от 0 до 1

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const num1 = getRandomNumber(10, 100);
console.log(num1);
