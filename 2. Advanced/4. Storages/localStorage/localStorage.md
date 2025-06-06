# localStorage
Храним данные в браузере пользователя бесконечно долго (почти). 

Это объект, хранящийся в `window`, который позволяет долговременно сохранять данные в браузере. Работает как хранилище данных в формате ключ-значение — при сохранении данных мы указываем имя поля, в которое должны быть сохранены данные, и затем используем это имя для их получения.

Значения хранятся в виде строк. При попытке сохранения других типов данных, они будут приведены к строке. Например, если записать число, то при чтении нам вернётся число, записанное в строку.

Не имеет ограничений по времени хранения, может быть очищен пользователем вручную или браузером при переполнении автоматически (браузеры на основе движка WebKit, например Safari, очищают `localStorage`, если к нему не обращались в течение 7 дней).

Максимальный объем данных ограничен размером 5MB.

Если вам нужно сохранить данные в браузере на долгое время и объем этих данных достаточно большой, то localStorage — то, что вам нужно. Данные будут храниться бессрочно и могут быть стёрты только в двух случаях: при превышении лимита по размеру данных или очистке хранилища пользователем или программно.

 При помощи `localStorage` можно сохранять данные, относящиеся к пользователю, не храня их на сервере.


# localStorage
`localStorage` в JavaScript — это механизм для хранения данных в браузере, который позволяет сохранять информацию в виде пар "ключ-значение". Данные, записанные в `localStorage`, сохраняются между сессиями браузера и не удаляются при закрытии окна или перезагрузке страницы, то есть они остаются в памяти до тех пор, пока не будут явно удалены.

## Что такое localStorage?
`localStorage` — это часть Web Storage API, которая предоставляет доступ к хранилищу данных на стороне клиента (в браузере). Это хранилище данных, которое доступно только на том же домене, с которого оно было записано.

## Зачем нужно localStorage?
`localStorage` используется для хранения данных на клиентской стороне, таких как:
- Настройки пользователя (например, темы оформления).
- Сессионные данные, которые нужно сохранить между перезагрузками страниц (например, товары в корзине).
- Логины, идентификаторы сессий или другие данные, которые должны быть доступны для пользователя на протяжении долгого времени.
- Легкие кэшированные данные, чтобы снизить нагрузку на сервер.

## Тонкости работы с localStorage
1. Постоянство данных:
  - Данные в `localStorage` сохраняются даже после закрытия браузера, перезагрузки страницы или выключения компьютера. Это делает его полезным для хранения информации, которая должна быть доступна на протяжении долгого времени.
2. Емкость:
  - Хранилище имеет ограниченный размер (обычно около 5-10 МБ на домен). Если данные превышают этот лимит, то будет выброшена ошибка.
3. Типы данных:
  - В `localStorage` можно хранить только строки. Если нужно сохранить объект, массив или другую структуру данных, их нужно преобразовать в строку с помощью `JSON.stringify()` перед записью и обратно в объект с помощью `JSON.parse()` при чтении.
4. Безопасность:
  - Данные в `localStorage` доступны через JavaScript на клиенте, поэтому они могут быть легко перехвачены с помощью инструментов разработчика или в случае уязвимости браузера. Важно избегать хранения чувствительных данных, таких как пароли.
5. Доступность данных:
  - Данные в `localStorage` доступны только в рамках одного домена и одного протокола. Это означает, что они не могут быть переданы между разными сайтами.

## Как использовать localStorage?
Вот основные методы для работы с `localStorage`:
1. Запись данных: Для записи данных в `localStorage` используется метод `setItem()`:
```js
localStorage.setItem('key', 'value');
```

Пример:
```js
localStorage.setItem('username', 'JohnDoe');
```

2. Чтение данных: Чтобы получить данные, используйте метод `getItem()`:
```js
let username = localStorage.getItem('username');
console.log(username);  // Выведет 'JohnDoe'
```

3. Удаление данных: Для удаления данных можно использовать метод `removeItem()`:
```js
localStorage.removeItem('username');
```

4. Очистка всех данных: Если нужно удалить все данные, хранящиеся в `localStorage`, используется метод `clear()`:
```js
localStorage.clear();
```

5. Проверка на наличие данных: Для проверки, есть ли данные по определенному ключу, можно использовать `getItem()` и сравнить с `null`:
```js
if (localStorage.getItem('username') !== null) {
    console.log('Username is set');
} else {
    console.log('Username is not set');
}
```

6. Пример хранения объектов: Как уже упоминалось, данные должны быть строками, поэтому объекты или массивы необходимо сначала преобразовать в строку. Например:
```js
let user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));  // Сохраняем объект как строку

let storedUser = JSON.parse(localStorage.getItem('user'));  // Читаем и восстанавливаем объект
console.log(storedUser);  // { name: 'John', age: 30 }
```

7. События: В `localStorage` есть событие, которое срабатывает, если данные были изменены другим вкладом или окном в браузере:
```js
window.addEventListener('storage', function(event) {
    console.log('Key:', event.key);
    console.log('Old Value:', event.oldValue);
    console.log('New Value:', event.newValue);
});
```

## Когда не стоит использовать localStorage?
1. Для хранения чувствительных данных (например, паролей), так как данные в `localStorage` доступны любому JavaScript на странице и могут быть прочитаны через инструменты разработчика.
2. Когда нужно работать с большим объемом данных, так как localStorage ограничено по объему.
3. Если требуется работать с данными между различными доменами. `localStorage` привязан только к одному домену.

### Заключение
`localStorage` — это удобный инструмент для хранения данных на клиентской стороне, который полезен для сохранения информации между сессиями пользователя. Тем не менее, важно учитывать ограничения по объему, безопасность и типы данных, которые можно хранить.
