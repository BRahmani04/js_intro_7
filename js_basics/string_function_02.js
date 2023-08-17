

//String - Searching 

let text = "Can I can a can"

//search

let result1 = text.search("can");

let result2 = text.search("Can");

console.log(result1); // 6
console.log(result2); // 0

// Tricky part
console.log(text.search("")); // 0
console.log(text.search(" ")); // 3
console.log(text.search("Hello")); // -1 because hello doesnt exists

// Includes() :(contains something) function

let quote = "I can do it";

let r1 = quote.includes("can"); 
let r2 = quote.includes("it"); 
let r3 = quote.includes("IT"); 

console.log(r1); // true
console.log(r2); // true
console.log(r3); // false

// Tricky part
console.log(quote.includes(quote)); // true
console.log(quote.includes("")); // true
console.log(quote.includes(" ")); // true
console.log(quote.includes("  ")); // false

// indexOf() vs lastIndexOf()
// indexOf - it looks to give you the index from left to right 
// lastIndexOf() - gives you the index from right to left

let greeting = "GOOD MORNING";


console.log(greeting.indexOf("G")); // 0
console.log(greeting.indexOf("GOOD")); // 0
console.log(greeting.lastIndexOf("G")); // 11
console.log(greeting.lastIndexOf("GOOD")); // 0

let sentence = "I like apple and pineapple";
console.log(sentence.indexOf("apple")); // 7
console.log(sentence.lastIndexOf("apple")); //21

// TRICKY PART
console.log (sentence.indexOf("abc")); // -1
console.log (sentence.lastIndexOf("abc")); // -1

// startsWith() vs endsWith()
let info = "My phone is 312-000-0000";

let b1 = info.startsWith("M"); // true
let b2 = info.startsWith("My"); // true
let b3 = info.endsWith("0000"); // true

console.log(b1); // TRUE
console.log(b1); // TRUE
console.log(b1);// TRUE


