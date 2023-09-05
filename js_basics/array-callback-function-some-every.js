
const numbers = [-5, 0, 5, 10, 23, -10];

console.log(numbers.some(x => x % 5 === 0)); // true 
console.log(numbers.every(x => x % 5 === 0)); // false

const result = numbers.some(x => x % 5 === 0).map(x => x % 5 === 0);
console.log(result);


const data = [true, 'str', 25];

console.log(data.every(x => x === true || x === false))// false


const cities = ['Rome', 'Kyiv', 'Paris', 'Milan'];

console.log(cities.every(x => x.length === 4 || x.length === 5));




