const numbers = [-5, 0, 5, 10, 23, -10];

const numberPos = numbers.filter(numbers => numbers > 0);
console.log(numberPos); //[ 5, 10, 23 ]

// oRR
// 1 using loops
const newArr1 = [];

for(const number of numbers) {
    if(number > 0) newArr1.push(number);
}

console.log(newArr1); // [ 5, 10, 23 ]


//ORR
// 2 using for each
const newArr2 = [];
numbers.forEach(number => {
    if(number > 0) newArr2.push(number);
});

console.log(newArr2); // [ 5, 10, 23 ]

//Find all the even numbers
// find all the odd numbers
// replace negative with 0



const newArray3 = numbers.filter(x => x % 2 === 0);
console.log(newArray3) // [ 0, 10, -10 ]

const newArray4 = numbers.filter(x => x % 2 !== 0);
console.log(newArray4) // [ -5, 5, 23 ]

const newArray5 = numbers.map(x => {
    if(x < 0) return  0
    else return x
});
console.log(newArray5) // [ 0, 0, 5, 10, 23, 0 ]



const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// Find all the fruites that start with M

const array1 = fruits.filter(fruit => fruit[0] === 'M');
console.log(array1)

// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
const array2 = fruits.filter(fruit => fruit.toLowerCase().includes('apple'))
console.log(array2);

//Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
const array3 = fruits.filter(fruit => fruit.length === 5);
console.log(array3);

// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
const array4 = fruits.filter(fruit => fruit.length !== 5);
console.log(array4);

// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]
const array5 = fruits.filter(fruit => fruit.toLowerCase(fruit.includes("a") || fruit.includes('e')))
console.log(array5)


// Count how many fruits has i  -> 2
let count = 0;

for (const fruit of fruits) {
    if(fruit.includes('i')) count++
}

console.log(count);
//or
console.log(fruits.filter(fruit => fruit.toLowerCase().indexOf('i') >= 0).length);
// ORR console.log(fruits.filter(fruit => fruit.toLowerCase().indexOf('i') >= 0).length)

// Count how many fruits ends with e  -> 3
let count1 = 0;

for (const fruit of fruits) {
    if(fruit.endsWith('e')) count1++
}

console.log(count1);
//or
console.log(fruits.filter(fruit => fruit.toLowerCase().endsWith('e')).length);

// Store the first and last letters of the fruits as shown -> ['Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn']

const array6 = fruits.map(fruits => fruits[0] + fruits[fruits.length-1]);
console.log(array6)


