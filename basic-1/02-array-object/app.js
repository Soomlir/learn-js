// Теория

// 1. Массивы
// const array = [1, 2, 3, 20, 42];
// const arrayStrings = ['a', 'b', 'c', 'd', null, undefined, 100];

// const array2 = new Array(1, 2, 3, 20, 42);

// console.log(array.length); // длина массива
// console.log(array[0]);
// console.log(array[array.length - 1]); // получить последний элемент массива

// array[array.length] = 'apple'; // добавить новый элемент в конец массива - не рекомендуемый способ

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const myNotes = [
  {
    title: "записать блок про массивы",
    comleted: false,
  },
  {
    title: "рассказать теорию объектов",
    comleted: true,
  },
];

function render() {
  // for (let note of myNotes) {
  //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  // }
  listElement.innerHTML = "";
  if (myNotes.length === 0) {
    listElement.innerHTML = "<p>Нет элементов</p>";
  }

  for (let i = 0; i < myNotes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(myNotes[i], i));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputElement.value,
    comleted: false,
  };

  myNotes.push(newNote);

  render();
  // listElement.insertAdjacentHTML(
  //   "beforeend",
  //   getNoteTemplate(newNote)
  // );
  // inputElement.value = "";
};

listElement.onclick = function (evt) {
  if (evt.target.dataset.index) {
    const index = Number(evt.target.dataset.index);
    const type = evt.target.dataset.type;
    if (type === "check") {
      myNotes[index].comleted = !myNotes[index].comleted;
    } else if (type === "delete") {
      myNotes.splice(index, 1);
    }

    render();
  }
};

function getNoteTemplate(note, index) {
  return ` 
  <li>
    <span class="${note.comleted ? "td-line-through" : ""}">${note.title}</span>
    <span>
      <span data-index="${index}" data-type="check">&check;</span>
      <span data-index="${index}" data-type="delete">&times;</span>
    </span>
  </li>
  `;
}

// 2.Объекты
const person = {
  firstName: "Katya",
  lastName: "Owl",
  year: 1990,
  hasProfession: true,
  languages: ["ru", "en", "de"],
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

console.log(person.year);
console.log(person["languages"]);

const key = "hasProfession";
console.log(person[key]); // Динамический ключ
