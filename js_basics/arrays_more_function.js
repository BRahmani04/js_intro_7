// Reverse

const arr1 = [2, 3, 4, 5, 6];

const arr2 = arr1.reverse();


console.log(arr1); // [ 6, 5, 4, 3, 2 ]

console.log(arr2); //[ 6, 5, 4, 3, 2 ]

const arr3 = arr2.reverse();

console.log(arr1); // [ 2, 3, 4, 5, 6 ]
console.log(arr2); //[ 2, 3, 4, 5, 6 ]
console.log(arr3); // [ 2, 3, 4, 5, 6 ]

// slice () and splice ()
// slice() is used to get sub-array from an array
// splice() is used to add or remove elements from an array

const arr = ['Grape', 'Kiwi', 'Apple', 'Orange'];

const sub_array_1 = arr.slice(); // ['Grape', 'Kiwi', 'Apple', 'Orange']
const sub_array_2 = arr.slice(0); // ['Grape', 'Kiwi', 'Apple', 'Orange']
const sub_array_3 = arr.slice(1); // [ 'Kiwi', 'Apple', 'Orange']

console.log(sub_array_1); // ['Grape', 'Kiwi', 'Apple', 'Orange']
console.log(sub_array_2);// ['Grape', 'Kiwi', 'Apple', 'Orange']
console.log(sub_array_3);  // [ 'Kiwi', 'Apple', 'Orange']

const sub_array_4 = arr.slice(0, 1);
const sub_array_5 = arr.slice(1, 3);
const sub_array_6 = arr.slice(2, 8);

console.log(sub_array_4); // ['Grape']
console.log(sub_array_5); // [ 'Kiwi', 'Apple']
console.log(sub_array_6); // ['Apple', 'Orange']

console.log(arr.slice(-Infinity, Infinity)); // [ 'Grape', 'Kiwi', 'Apple', 'Orange' ]

console.log(arr.slice(3, 1)) // [] because its not substring so it gives you only empty

// splice
arr.splice(1, 0, "Pinappple");
console.log(arr); // [ 'Grape', 'Pinappple', 'Kiwi', 'Apple', 'Orange' ]

arr.splice(1, 3);
console.log(arr); // [ 'Grape', 'Orange' ]

arr.splice(5, 3)
console.log(arr); //  [ 'Grape', 'Orange' ]

arr.splice(5, 0, "Peach", "Berry");
console.log(arr); // [ 'Grape', 'Orange', 'Peach', 'Berry' ]

// SORT()

arr.sort();
console.log(arr); // [ 'Berry', 'Grape', 'Orange', 'Peach' ]

arr.push('apple');
arr.push('Banana');
console.log(arr); // [ 'Berry', 'Grape', 'Orange', 'Peach', 'apple', 'Banana ]

arr.sort();
console.log(arr); // [ 'Banana', 'Berry', 'Grape', 'Orange', 'Peach', 'apple' ] - lower cases will always be last 

// FLAT

const chars = [['a', 'b'],['1', '2'], ['#', '&', '^', '('], ' '];
const chars_flat = chars.flat();

console.log(chars); // [ [ 'a', 'b' ], [ '1', '2' ], [ '#', '&', '^', '(' ], ' ' ]
console.log(chars_flat); // [ 'a', 'b', '1', '2', '#', '&', '^', '(', ' ' ]


