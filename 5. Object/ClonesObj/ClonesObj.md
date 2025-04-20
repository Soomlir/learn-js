# Поверхностное и глубокое копирование 
JavaScript включает функцию structuredClone(), которая позволяет выполнять глубокое копирование сложных структур данных.

```js
const obj1 = {
  name: 'Alice',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const obj2 = { ...obj1 }; // или Object.assign({}, obj1)

obj2.name = 'Bob';
obj2.address.city = 'Los Angeles';

console.log(obj1.name);  // Alice
console.log(obj1.address.city);  // Los Angeles (изменилось, так как это ссылка на тот же объект)
console.log(obj2.name);  // Bob
console.log(obj2.address.city);  // Los Angeles
```

Проблема поверхностного копирования - разные массивы ссылаются на одни и те же объекты в памяти

## Как получить глубокую копию

В JavaScript есть функция structuredClone() для глубокого копирования массивов или объектов. На странице с документацией можно проверить доступность этой функции для разных версий: например, она доступна в NodeJS, начиная с версии 17.0.0.
```js
const deep = structuredClone(itemsInCart)
console.log(itemsInCart[1] === deep[1])
// false
```

Ещё один способ глубокого копирования звучит достаточно глупо — нужно сериализовать копируемый объект в JSON и тут же распарсить его. В результате появится полная копия объекта:
```js
const deep = JSON.parse(JSON.stringify(itemsInCart))
console.log(itemsInCart[1] === deep[1])
// false
```
