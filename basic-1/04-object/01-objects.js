// 1.Объекты
const person = {
    name: "Katya",
    age: 30,
    isProgrammer: false,
    languages: ["ru", "en"],
    address: {
      city: "Tokio",
      street: "Super",
    },
    "complex key": 123,
    [4 + " key"]: "value", // любые вычисления в качестве ключа
    greet() {
      console.log("greet from person");
    },
    arrow: () => {
      console.log(this); // window - стрелочная функция не создает свой контекст и не становится контекстом объекта
    }, // принимает в качестве this - window
  };
  
  console.log(person.address);
  console.log(person["address"]);
  console.log(person["complex key"]); // единственный вариант обращения из-за пробела
  
  const key = "age";
  console.log(person[key]); // динамический ключ
  
  // Менять типы данных person не можем (потому что const), а менять содержимое можем
  // Все свойства можно воспринимать как обычные типы данных
  person.age = 33;
  person.age++;
  person.languages.push("de");
  
  delete person.address; // удаление ключа вместе со значением
  
  // Деструкторизация
  // const age = person.age;
  // const name = person.name;
  // const languages = person.languages;
  const { age, name: firstName = "Olga", languages } = person;
  
  for (let key in person) {
    // Есть вероятность пройтись по ключам прототипа
    console.log(key); // Все ключи объекта
    console.log(person[key]); // Все значения ключей
  }
  
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      // Проверка на содержание свойства в объекте
      console.log(person[key]);
    }
  }
  
  const keys = Object.keys(person); // Ключи объекта person
  
  keys.forEach((key) => console.log(key));
  
  Object.keys(person).forEach((key) => console.log(key));
  
  const logger = {
    keys(object) {
      console.log("Object keys", Object.keys(object));
    },
  
    keysAndValues(object) {
      Object.keys(object).forEach((key) => {
        console.log("Key: ", key);
        console.log("Value: ", object[key]);
      });
    },
  };
  
  logger.keysAndValues(person);
  
  const logger2 = {
    keys() {
      console.log("Object keys", Object.keys(this));
    },
  
    keysAndValues() {
      Object.keys(this).forEach((key) => {
        console.log("Key: ", key);
        console.log("Value: ", this[key]);
      });
    },
  };
  
  // const bound = logger2.keysAndValues.bind(person); // bound - функция
  // bound();
  // logger2.keys.bind(person)(); // Контекстом является любой объект
  
  logger2.keys.call(person); //- call - сразу же вызывает
  logger2.keys.apply(person);
  
  class Person7 {
    constructor(name, age) {
      // Конструктор вызывается в момент объявления new Obj()
      super(); // Вызываем конструктор родительского класса
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log("Hello World!");
    }
  }
  
  const newPerson = new Person7("Katya", 30);
  