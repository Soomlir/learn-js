// 1. Объекты
const person = {
    name: "Igor",
    age: 33,
    isProgrammer: true,
    languages: ["ru", "en"],
    "complex key": "Complex value",
    ["key_" + 1 + 3]: "Computed key", // key_4
    greet: function () {
      console.log("greet from person");
    },
    greet2() {
      console.log("greet2 from person");
    },
    info() {
      console.info("Информация про человека по имени", this.name);
    },
  };
  
  console.log(person.name);
  const ageKey = "age";
  console.log(person[ageKey]);
  console.log(person["complex key"]);
  person.greet();
  
  person.age++;
  person.languages.push("by");
  person["key_4"] = undefined;
  
  delete person["key_4"];
  
  // const name = person.name;
  // const age = person.age;
  // const languages = person.languages;
  
  const { name, age: personAge = 10, languages } = person;
  
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log("key:", key);
      console.log("value:", person[key]);
    }
  }
  
  const keys = Object.keys(person).forEach((key) => {
    console.log("key:", key);
  });
  
  // 2. Контекст
  person.info();
  
  const logger = {
    keys() {
      console.log("Object keys: ", Object.keys(this));
    },
    keysAndValues() {
      Object.keys(this)
        .forEach((key) => {
          console.log(`"${key}": ${this[key]}`);
        })
        .bind(this);
    },
  };
  
  const bound = logger.keys.bind(logger);
  bound();
  
  logger.keys.call(person);
  
  logger.keysAndValues.call({ a: 1, c: 2 });
  