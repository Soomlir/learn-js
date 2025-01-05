const cars = ["Мазда", "Форд", "Бмв", "Мерседес"];
const fib = [1, 1, 2, 3, 5, 8, 13];
const people = [
  { name: "Igor", budget: 4200 },
  { name: "Katya", budget: 3500 },
  { name: "Viktoria", budget: 1700 },
];

console.log(cars);

cars.push("Lambo"); // добавить новый элемент в конец массива
cars.unshift("Reno"); // добавить новый элемент в начало массива

const firstItem = cars.shift(); // удалить первый элемент массива и можно вернуть в переменную
const lastItem = cars.pop(); // удалить последний элемент массива и можно вернуть в переменную

console.log(cars.reverse());

console.log(cars.indexOf("Бмв")); // 2 - возвращает индекс искомого элемента. -1 - если элемент не найден

const index = people.findIndex(function (person) {
  return person.budget === 3500;
});
console.log(person[index]);

let findPerson;
for (const person of people) {
  if (person.budget === 3500) {
    findPerson = person;
  }
}

const person = people.find((person) => (person.budget = 3500));

cars.includes("Мазда"); // проверять наличие элемента

const upperCaseCars = cars.map((car) => {
  return car.toUpperCase();
});

const pow2 = (num) => num ** 2;
const sqrt = (num) => Math.sqrt(num);

const pow2Fib = fib.map(pow2).map(sqrt);

const filteredNumbers = pow2Fib.filter((num) => {
  return num > 20;
});

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce(function (acc, person) {
    acc += person.budget;
    return acc;
  }, 0);

// Задача 1 - перевернуть строку
const text = "Привет, мы изучаем JavaScript!";
const reverseText = text.split("").reverse().join("");
