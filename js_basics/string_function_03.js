
// Triming strings

let city = "  Chicago  ";

console. log(city.length); // 11
console.log(city.trim()); // "Chicago"
console.log(city.trim().length); // 7
console.log(city.trimStart()); "Chicago  "
console.log(city.trimEnd()); "  Chicago"


// Tricky part

let sentence = "  I like Chicago  ";

console.log(sentence.trim());
console.log(sentence.trimStart());
console.log(sentence.trimEnd());

// Padding String

let number1 = "123";
let number2 = "43635473";

console.log(number1.padStart(8, " "));
console.log(number2.padEnd());

let word = "Hello";

console.log(word.padStart(7, "-").padEnd(9, "-"));

// Concatenation
let str1 = "Hello"
let str2 = "World"

console.log(str1 + " " + str2); // Hello World
console.log(`${str1} ${str2}`); // Hello World

console.log(str1.concat(" ").concat(str2)); // Hello World

