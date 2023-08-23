const arr1 = [3, 4, 5];
const arr2 = ['Mouse', 'Comuputer', 'Desk'];

let arr1_str = arr1.toString();
let arr2_str = arr2.toString();

console.log(arr1); // [ 3, 4, 5 ]
console.log(arr2); // [ 'Mouse', 'Comuputer', 'Desk' ]
console.log(arr1_str); // 3,4,5
console.log(arr2_str); // Mouse,Comuputer,Desk

let arr2_str_pipe = arr2.join(' | ');

console.log(arr2_str_pipe); // Mouse | Comuputer | Desk

const newArr = arr2_str_pipe.split(" | ");
console.log(newArr); // [ 'Mouse', 'Comuputer', 'Desk' ]

let str = 'Tech';
console.log(str.split('')); // [ 'T', 'e', 'c', 'h' ]

// '1-2-3-4-5-6' -> '1 000 2 000 3 000 4 000 5 000 6'

let data = '1-2-3-4-5-6'

const data_array = data.split('-'); //['1' , '2' , '3', '4' , '5', '6']

let data_array_string = data_array.join(' 000 ');

console.log(data_array_string); //1 000 2 000 3 000 4 000 5 000 6

console.log('1-2-3-4-5-6'.split('-').join(' 000 ')); //1 000 2 000 3 000 4 000 5 000 6

console.log(data.replaceAll('-', ' 000 '));


