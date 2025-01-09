// 1. Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
// const arr = [1, '', 2, 3, '', 5]
// const result = arr.filter((elem) => elem != '');
// console.log(result);

// 2. Дан массив:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.
// const arr = [
//   [2, 1, 4, 3, 5],
//   [3, 5, 2, 4, 1],
//   [4, 3, 1, 5, 2],
// ];

// for (let array of arr) {
//   array.sort((a, b) => a - b);
// }
// console.log(arr);

// 3. Даны два массива: 
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми. 
// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4, 5];

// let length1 = arr1.length;
// let length2 = arr2.length;


// if (length1 < length2) {
//   arr2 = arr2.slice(0, length1);
// } else if (length2 < length1) {
//   arr1 = arr1.slice(0, length2);
// }

// console.log(arr1, arr2);


// 4. Дан массив. Удалите из него каждый пятый элемент. 
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = arr.length - 1; i >= 0; i--) {
//     // Удаляем каждый пятый элемент (индекс 4, 9, 14 и т.д.)
//     if ((i + 1) % 5 === 0) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr); // Вывод: [1, 2, 3, 4, 6, 7, 8, 9]

// 5. Дан массив: 
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива. 

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // Используем reduce для суммирования всех элементов
// const sum = array.reduce((accumulator, currentArray) => {
//   return accumulator + currentArray.reduce((acc, num) => acc + num, 0);
// }, 0);

// console.log(sum); // Вывод: 45


// 6. Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов. 
// const arr = ['apple', 'qc', 'banana', 'owl', 'fix', 'ab'];
// const result = arr.filter((elem) => elem.length < 3);
// console.log(result)

// 7. Дан массив: 
// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива. 
// const arr = [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ];

// const result = arr.reduce((acc, elem) => {
//   return acc + elem.reduce((accInner, item) => {
//     return accInner + item.reduce((accF, element) => accF + element, 0)
//   }, 0);
// }, 0);

// console.log(result)


// 8. Дан некоторый массив, например, вот такой: 
// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива: 
// [2, 1, 4, 3, 6, 5]
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) { // Проверяем, чтобы не выйти за пределы массива
        // Меняем местами элементы
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
    }
}

console.log(arr); // Вывод: [2, 1, 4, 3, 6, 5]
