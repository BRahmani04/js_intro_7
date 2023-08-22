
const numbers = [25, 27, 7, 100, 7];

// includes function - if its included it returns true if it doesnt false;

console.log(numbers.includes(10)); // false
console.log(numbers.includes(7)); // true



// indexOf() function

console.log(numbers.indexOf(5)); // -1 whenever you dont have the numbers is always going to be -1
console.log(numbers.indexOf(7)); // 2 // it askes what is the index of 7 and its 2 because always starts from left 
console.log(numbers.indexOf(numbers[3])); // it is 3 becuause numbers[3] its 100 and thats the index of 3



//lastIndexOf() function

console.log(numbers.lastIndexOf(7)); // 4
console.log(numbers.lastIndexOf(101)); // -1
console.log(numbers.lastIndexOf(14 / 2)); // 4 