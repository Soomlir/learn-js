// 1.Функции

// Function Delaration
function greet(name) {
    console.log("Hello - ", name);
  }
  
  // Function Expression
  const greet2 = function (name) {
    console.log("2 Hello -", name);
  };
  
  // setTimeout(greet, 1500);
  
  setTimeout(function () {
    console.log("Timeout");
  }, 1500);
  
  let counter = 0;
  const interval = setInterval(function () {
    // setInterval - возвращает константу - интервал
    if (counter === 5) {
      clearInterval(interval); // остановить выполнени интервала
    } else {
      console.log(++counter);
    }
  }, 1000);
  
  // Arrow Function
  const arrow = (name, age) => {
    console.log("Hello -", name, age);
  };
  
  const arrow2 = (count) => count * 2;
  
  function pow(num, exp) {
    return Math.pow(num, exp);
  }
  
  const pow2 = (num, exp) => Math.pow(num, exp);
  const pow3 = (num, exp) => num ** exp;
  
  // Параметры по умолчанию
  const sum = (a = 40, b = 2) => a + b;
  console.log(sum()); // 42
  console.log(sum(100, 11)); // 111
  
  function sumAll(...numbers) {
    let res = 0;
    for (let number of numbers) {
      res += number;
    }
    return res;
  }
  
  // console.log(sumAll(1, 2, 3, 4));
  
  function sumAll2(...numbers) {
    return numbers.reduce((count, value) => (count += value));
  }
  
  console.log(sumAll2(1, 2, 3, 4));
  
  // Closures - замыкания
  function createPerson(name) {
    return function (lastName) {
      console.log(name + " " + lastName);
    };
  }
  
  const addLastName = createPerson("Katya");
  addLastName("Owl"); // Katya Owl
  addLastName("Fox"); // Katya Fox
  