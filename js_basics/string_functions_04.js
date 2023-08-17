// Extracting substrings


let word = "JavaScript";

// slice() function

console.log(word.slice(2, 5));  // vaS
console.log(word.slice(4, 7)); // Scr
console.log(word.slice(7)); // ipt
console.log(word.slice(3, 8)); // aScri

// OR
//substring function
console.log(word.substring(2, 5));  // vaS
console.log(word.substring(4, 7)); // Scr
console.log(word.substring(7)); // ipt
console.log(word.substring(3, 8)); // aScri

// TRICKY PART

let car = "Tesla";
console.log(car.slice(2, 15)); // sla
console.log(car.substring(2, 15)); // sla

console.log(car.slice(-3, 2)); // sla
console.log(car.substring(-3, 2)); // sla


// split function
let sentence = "JavaScript is the most used programing language";

console.log(sentence.split("most")); // it takes "most" out 



