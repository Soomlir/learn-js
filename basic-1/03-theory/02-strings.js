// 1.Строки
const name = "Katya";
const age = 30;

const output = `any text`;

const old = "Hello my name is " + name + " and my age is " + age;
const output2 = `Hello my name is ${name} and my age is ${getAge()}`;

function getAge() {
  return age;
}

const output3 = `Hello my name is ${name} and my age is ${
  getAge() > 18 ? "Can drive" : "Can't drive"
}`;

console.log(name.length); // 5
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(1)); // a
console.log(name.indexOf("t")); // 2 ( -1 - если не найден)
console.log(name.startsWith("Ka")); // true
console.log(name.endsWith("yq")); // false
console.log(name.repeat(2)); // KatyaKatya

const password = "     pswd      ";
console.log(password.trim());
