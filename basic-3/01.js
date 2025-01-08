// Коллекции Map представляют собой объекты, в которых в качестве ключей могут выступать как примитивы, так и объекты. 
const map = new Map;

// После этого в коллекцию можно будет добавлять элементы с помощью метода set и получать их с помощью метода get. 
let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');

console.log(map.get(arr1));
console.log(map.get(arr2));

// Коллекции Set позволяют создать массивы без дублей.
let set = new Set;

set.add(1);
set.add(2);
set.add(3);

// Удаление дублей через Set 
let arr = [1, 2, 3, 1, 3, 4];
let res = [...new Set(arr)];
