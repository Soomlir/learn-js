// 1. Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
for (let i = 10; i < 1000; i++) {
  const firstDigit = Math.floor(i / 10);
  const secondDigit = i % 10;
  if (firstDigit + secondDigit === 5) {
    console.log(i);
  }
}

// 2. Дан массив. Удалите из него элементы с заданным значением.
const arr = [1, 2, 3, 4, 5, 6, 7];
const resultArr = arr.filter((element) => element !== 4);
console.log(resultArr);

// 3. Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
const arr2 = [1, 2, 3, 4, 5, 6];
const resultArr2 = arr2
  .slice(0, arr2.length / 2)
  .reduce((acc, element) => acc + element);
console.log(resultArr2);

// 4. Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
const arr3 = [1, -1, -2, 4, -4, 5, 10, 11];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < 0) {
    sum += arr3[i];
  }
}
console.log(sum);

// 5. Дан массив с числами. Оставьте в нем только положительные числа.
const arr4 = [1, -1, -2, 4, -4, 5, 10, 11];
const resultArr4 = arr4.filter((element) => element > 0);
console.log(resultArr4);

// 6. Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов. 
const arr5 = [1, 2, 3, 4, 5, 6];
let leftItems = arr5.slice(0, (arr5.length / 2));
let rightItems = arr5.slice((arr5.length / 2));
const leftItemsSum = leftItems.reduce((acc, item) => acc + item);
const rightItemsSum = rightItems.reduce((acc, item) => acc + item);
const result5 = leftItemsSum / rightItemsSum;
console.log(leftItems)
console.log(rightItems)
console.log(result5);