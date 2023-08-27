
const names = ['John', 'Max', 'Alex', 'Jane']
// output all the names to the console one by one

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// OR

for (let name of names) {
    console.log(name);
}


const names = ['John', 'Max', 'Alex', 'Jane'] 

for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}

// ORR

for (let name of names) {
    console.log(name.toUpperCase());
}

// Assume you are given an array that stores numbers
//Count how many positive nymbers you have in the below array


const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

let count = 0

for (const num of numbers) {
    if(num % 2 === 0) count++;
}
console.log(count)

// orr
let countEven = 0;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) countEven++;
}
console.log(countEven);


// 

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

for (const num of numbers) {
   console.log(num * 5)
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers * 5);
}



function multiply5(x) {
    return x * 5
}