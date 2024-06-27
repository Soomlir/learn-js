// 1. Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти. 
for (let i = 10; i < 1000; i++) {
  const firstDigit = Math.floor(i / 10);
  const secondDigit = i % 10;
  if (firstDigit + secondDigit === 5) {
    console.log(i);
  }
}

// 2. Дан массив. Удалите из него элементы с заданным значением.
