// 1. Переменные
// variable
var firstName = "Igor";
const lastName = "Soomlir"; // string
let age = 33; // number
const isProgrammer = true; // boolean

const _ = `private`;
let $ = 7;

// const if = 1; // error
const withNum2 = "2";
// const 2withNum = 0; // error

// 2. Мутирование
// разницы между '' и "" в JS нет
console.log("Имя человека: " + firstName + ", а возраст человека: " + age);
console.log(age);
console.log(age.toString()); // разным цветом в консоли число и строка

// const _lastName = prompt('Введите фамилию');
// alert(firstName + ' ' + _lastName);
// confirm();

// 3. Операторы
let currentYear = 2022;
const birthYear = 1989;

const _age = currentYear - birthYear;
// console.log(_age);

const a = 10;
const b = 5;

let c = 32;
c = c + a;

c += a;
c -= a;
c *= a;
c /= a;
c %= a;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(currentYear++);
console.log(--currentYear);

// 4, Типы данных
const _isProgrammer = true;
const _name = "Igor";
const age2 = 33;
let x; // undefined
let big = 10n;

console.log(typeof _isProgrammer); // boolean
console.log(typeof _name); // string
console.log(typeof age2); // number
console.log(typeof x); // undefined
console.log(typeof null); // object
console.log(typeof big); // BigInt
console.log(typeof Symbol()); // Symbol
console.log(typeof {}); // Object

// 5. Приоритет операторов
const fullAge = 33;
const _birthYear = 1989;
const _currentYear = 2022;

// > < >= <=
const isFullAge = currentYear - birthYear >= fullAge; // 33 >= 33
// mdn - operator precedence - приоритет выполнения операторов

// 6. Условные операторы
const courseStatus = "pending"; // ready, fail, pending

if (courseStatus === "ready") {
  console.log("Курс уже готов и его можно проходить");
} else if (courseStatus === "pending") {
  console.log("Курс пока находится в процессе разработки");
} else {
  console.log("Курс не получился");
}

const isReady = true;

if (isReady) {
  console.log("Все готово");
} else {
  console.log("Все не готово");
}

// Тернарное выражение (Тернарный оператор)
isReady ? console.log("Все готово") : console.log("Все не готово");

const num1 = 42; // number
const num2 = "42"; // string

console.log(num1 == num2); // true
console.log(num1 === num2); // false

// 7. Булевая логика
// mdn logic operators

// 8. Функции
function calculateAge(year) {
  return 2022 - year;
}

console.log(calculateAge(1989));
console.log(calculateAge(2000));

const myAge = calculateAge(1989);
console.log(myAge);

function logInfoAbout(name, year) {
  const age = calculateAge(year);

  if (age > 0) {
    console.log("Человек по имени " + name + " сейчас имеет возраст" + age);
  } else {
    console.log("Вообще-то это уже будущее");
  }
}

logInfoAbout("Igor", 1989);
logInfoAbout("Katya", 1996);

// 9. Массивы
const cars = ["Мазда", "Мерседес", "Форд"];
console.log(cars);

// const cars = new Array('Мазда', 'Мерседес', 'Форд');

console.log(cars.length); // Длина массива
console.log(cars[1]); // Мерседес
console.log(cars[2]); // Форд
console.log(cars[3]); // undefined

cars[0] = "Порше";
cars[3] = "Опель";

cars[cars.length] = "Бмв";

// 10. Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд'];

for (let i = 0; i <= cars.length; i++) {
  console.log(cars[i]);
}

for (let car of cars) {
  console.log(car);
}

// 11. Объекты
// const person = new Object({});
const person = {
  firstName: "Igor",
  lastName: "Soomlir",
  year: 33,
  languages: ["ru", "en"],
  isProgrammer: true,
  greet: function () {
    console.log("greet");
  },
};

console.log(person.firstName); // Igor
console.log(person["year"]); // 33

const key = "languages";
console.log(person[key]);

person.hasWife = true;
console.log(person);

person.greet();
