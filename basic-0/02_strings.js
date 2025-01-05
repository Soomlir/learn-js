const name = "Igor";
const age = 33;
const output =
  "Привет, меня зовут " + name + " и мой возраст: " + age + " лет.";
console.log(output);

// ${} - можно писать переменные, функции
const _output = `Привет, меня зовут ${name} и мой возраст ${age}`; // тернарный оператор можно использовать

const output2 = `
    <div>This is div</div>
    <p>This is p</p>
`; // сохраняются все символы пробелов и переносов строк

const _name = "Igor";
console.log(_name.length); // сколько символов в строчке
console.log(_name.toUpperCase());
console.log(_name.toLowerCase());
// console.log(_name.chartAt(1)); какой символ на 1 позиции
console.log(_name.indexOf("go")); // есть ли подстрока в строке, если нет то -1 вернет
console.log(_name.startsWith("I"));
console.log(_name.endsWith("r"));
console.log(_name.repeat(2));

const string = "     password    ";
console.log(string.trim());
console.log(string.trimLeft());
console.log(string.trimRight());

// Альтернативный синтаксис. Для того, чтобы можно было валидировать
function logPerson(s, name, age) {
  if (age < 0) {
    age = "Еще не родился";
  }
  return `${s[0]} ${name} ${s[1]} ${age}`;
}

const personName = "Igor";
const personAge = 33;
const __output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
console.log(__output);
