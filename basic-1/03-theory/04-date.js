// console.log(new Date());

const now = new Date();

const start = new Date(1000 * 60 * 60 * 24 * 365);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
