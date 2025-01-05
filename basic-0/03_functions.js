// 1. Функции

// Function Declaration
function greet(name) {
    console.log("Привет - ", name);
  }
  
  // Function Expression
  const greet2 = function greet2(name) {
    console.log("Привет - ", name);
  };
  
  const greet3 = function () {
    console.log("Привет - ", name);
  };
  
  greet("Igor");
  greet2("Katya");
  
  console.log(typeof greet); // function
  console.dir(greet);
  
  // 2. Анонимные функции
  let counter = 0;
  const interval = setInterval(function () {
    if (counter === 5) {
      clearInterval(interval); // clearTimeout
    } else {
      console.log(counter);
    }
    console.log(++counter);
  }, 1000);
  
  // 3. Стрелочные функции
  const arrow = (name, age) => {
    console.log("Привет - ", name, age);
  };
  
  const arrow2 = (name) => console.log("Привет - ", name);
  
  const pow2 = (num) => {
    return num ** 2;
  };
  
  const pow3 = (num) => num ** 3;
  
  // 4. Аргументы по умолчанию
  const sum = (a, b = a * 2) => a + b;
  console.log(sum(41));
  
  function sumAll(...all) {
    let result = 0;
    for (let num of all) {
      result += num;
    }
    return result;
  }
  
  sumAll(1, 3, 4, 7);
  
  // 5. Замыкания
  function createMember(name) {
    return function (lastName) {
      console.log(name + lastName);
    };
  }
  
  const logWithLastName = createMember("Igor");
  
  console.log(logWithLastName("Soomlir"));
  console.log(logWithLastName("Qwerty"));
  