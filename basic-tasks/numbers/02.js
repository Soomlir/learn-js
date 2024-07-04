// 1. Даны числа, разделенные запятыми: 
// '12,34,56'
const numbers = '12,34,56';
const result = numbers.split(',').reduce((acc, item) => acc + parseInt(item), 0);
console.log(result)

// 2. Дано число. Выведите в консоль количество четных цифр в этом числе. 
const num = 123456;
let result2 = num.toString();
let count = 0;

for (let i = 0; i < result2.length; i++) {
  if (parseInt(result2[i]) % 2 === 0) {
    count++;
  }
}
console.log(count);