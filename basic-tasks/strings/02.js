// 1. Дана некоторая строка. Найдите позицию первого нуля в строке.
const string = "Apple0Banana0";
const position = string.indexOf("0");

console.log(position); // Выведет 5

// 2. Дана строка. Удалите предпоследний символ из этой строки.
const string2 = "banana";
const resultStr = string2.slice(0, -2) + string2.slice(-1);
console.log(resultStr);

// 3. Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
const word1 = "apple";
const word2 = "element";
const result2 = word2.startsWith(word1[word1.length - 1]);
console.log(result2);

// 4. Дана некоторая строка. Найдите позицию третьего нуля в строке.
const words = "aba0lo0we0";
let count = 0;
let position2 = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "0") {
    count++;
    if (count === 3) {
      position2 = i;
      break;
    }
  }
}
console.log(position2);

// 5. Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
const str = "qwe1few3232";
const firstDigitPosition = str.search(/\d/);
console.log(firstDigitPosition);

// 6. Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'
const str2 = "abcde";
let str3 = str2
  .split("")
  .map((ch, i) => (i % 2 ? ch.toLowerCase() : ch.toUpperCase()))
  .join("");

console.log(str3);

// 7. Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'
const str4 = "aaa bbb ccc";
const resultStr2 = str4
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(resultStr2);
