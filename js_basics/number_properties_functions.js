

// Number properties
console. log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console. log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console. log(Number.MAX_VALUE); 
console. log(Number.MIN_VALUE);

console .log(Number.length); // 1

// Number functions

// toString() - returns a number as a string
// toFixed() - returns a number written with a number of decimals
// toPrecision() - returns a number written with a specified length


Number.toString(123 + 2); // 125

let number = 25;

console. log((123).toString() + 2); // 1232
console. log((123).toString() * 2); // 246

console. log((10.521).toFixed(2)); // 10.52
console. log((10.577).toFixed(2)); // 10.58
console. log((10.577).toFixed(1)); // 10.6


console.log((120000 / 52).toFixed(0));
console.log((120000 / 52).toFixed(1));

console.log((1.26543).toPrecision(3)); // 1.27

// Converting other data types into numbers

console. log(true + 1); // 2 - because it converts true to 1
console .log(false + 1); // 1 - because it converts false to 1
console.log(Number("20") + 1); // 21
console.log(parseInt("20") + 1); // 21

// 

console.log(Number("5.5") + 1); //6.5
console.log(parseInt("5.5") + 1); // 6
console.log(parseFloat("5.5") + 1); // 6.5



console.log(Number("Hello") + 1); // NaN
console.log(parseInt("Hello") + 1); //NaN
console.log(parseFloat("Hello") + 1); //NaN

console.log(Number("") + 1); // 1
console.log(parseInt("") + 1); // NaN
console.log(parseFloat("") + 1); // NaN

// Number.isInteger() - returns true if the argument is an integer 
// Number.isSafeInteger() - returns true if the argument is a safe integer
// Number.parseFloat() - converts a string to a number
// Number.parseInt() - converts a string to a whole number

// How to check if the number is interger or safe interger

let number1 = 1, number2 = 1000, number3 = "1", number4 = 546345474656673453452;

console.log(Number.isInteger(number1)); // true
console.log(Number.isInteger(number2)); // true
console.log(Number.isInteger(number3)); // false
console.log(Number.isInteger(number4)); // true

console. log(Number.isSafeInteger(number1)); // true
console. log(Number.isSafeInteger(number2)); // true
console. log(Number.isSafeInteger(number3)); // false
console. log(Number.isSafeInteger(number4)); // false

console.log(Number.isInteger(25.5)); // false - because the interger is a whole number
console.log(Number.isInteger("123" + 35)); // false 



