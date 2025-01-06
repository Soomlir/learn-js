// 1.Массивы
const names = ["Ольга", "Марина", "Елизавета", "Ксюша", "Игорь"];

names.push("Света");
names.unshift("Алёна");

// names.shift(); // удалить первый элемент массива
// names.pop(); // удалить последний элемент массива

// shift, pop - возвращает элемент (можно записать в переменную)

// console.log(names.reverse()); // мутирующий метод, переворачивает массив

const letters = ["e", "c", "d", "b", "a"];
// console.log(letters.sort());

// console.log(names.splice(2, 1));

const greatWoman = "Елизавета";
console.log(names.indexOf(greatWoman));

names.map(function (name) {
  // map - всегда возвращает новый массив
  return name.toLowerCase();
});

console.log(names.includes("Игорь"));

const people = [
  { name: "Olga", budget: 4200 },
  { name: "Igor", budget: 15100 },
  { name: "Katya", budget: 300 },
  { name: "Ksusha", budget: 7520 },
];

// Так не сработает
console.log(people.indexOf({ budget: 7520 })); // -1
console.log(people.indexOf({ name: "Ksusha", budget: 7520 })); // -1

let findedPerson;

for (let person of people) {
  if (person.budget === 7520) {
    findedPerson = person;
  }
}

const findedPerson2 = people.find(function (person) {
  if (person.budget === 7520) {
    return true;
  }
});

const findedPerson3 = people.find(function (person) {
  return person.budget === 7520;
});

const findedPerson4 = people.find((person) => person.budget === 7520);

const findedIndexPerson = people.findIndex(function (person) {
  // если не находит, возвращает -1
  return person.budget === 7520;
});

const filtered = people.filter(function (person) {
  return person.budget > 5000;
});

let sumBudget = 0;
filtered.forEach(function (person) {
  sumBudget += person.budget;
});

const sumBudget2 = people
  .filter((person) => person.budget > 5000)
  .map((person) => person.budget)
  .reduce((count, p) => count + p);

const string = "Привет, как дела?";

console.log(string.split("").reverse().join(""));
