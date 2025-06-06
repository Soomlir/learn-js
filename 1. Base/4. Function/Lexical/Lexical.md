# Лексическое окружение
Лексическое окружение - это переменные и функции доступные функции.
Это окружение зависит от места, где функция была объявлена, а не от того, где она была вызвана.

## Что входит в лексическое окружение?
Лексическое окружение включает:
1. Переменные, которые доступны в текущем контексте.
2. Функции, которые определены в текущем контексте.
3. Контекст (например, значение this), который также привязан к этому окружению, в случае обычных функций.

## Function declaration
```js 
function showThis() {
  console.log(this);  // В глобальном контексте
}

showThis();  // В нестрогом режиме это выведет глобальный объект (window в браузере). В строгом undefined
```

- В глобальном контексте — это window или undefined в строгом режиме.
- В качестве метода объекта — это объект, через который была вызвана функция.

## Function Expression
- В глобальном контексте — это window или undefined в строгом режиме.
- В качестве метода объекта — это объект, через который была вызвана функция.

## Arrow Functions
У них нет собственного контекста this.
стрелочные функции всегда заимствуют this из внешнего кода.
```js
const arrowFunction = () => {
  console.log(this);  // `this` ссылается на окружающий контекст (глобальный объект или undefined)
};

arrowFunction();  // В нестрогом режиме выведет `window`, в строгом — `undefined`
```

```js
const obj = {
  name: 'MyObject',
  arrowFunction: () => {
    console.log(this.name);  // `this` ссылается на глобальный объект (window или undefined)
  }
};

obj.arrowFunction();  // Выведет: undefined (потому что `this` ссылается на глобальный объект)
```
Для стрелочных функций:
- Они не имеют собственного контекста this и заимствуют его из внешнего контекста.
- В глобальном контексте this будет window (нестрогий режим) или undefined (строгий режим).
