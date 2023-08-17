
let name = "John";

// Length  property : it returns the total count of the characters in the string

let totalChars = name.length; // 4
console.log(totalChars); // 4
console.log(name.length); // 4
console.log (typeof totalChars); // number
console.log (typeof name.length); // number


// Strimg - Changing Cases toUpperCase() vs toLowerCase()

let greeting = "Good Morning";
let lowerGreeting = greeting.toLowerCase();
let upperGreeting = greeting.toUpperCase();

console.log (greeting); // Good Morning

console.log(lowerGreeting); // good morning

console.log(upperGreeting); // GOOD MORNING

console.log(greeting.toLowerCase()); // good morning

// Tricky strings
console.log("123ABC@!#$".toLowerCase()); //123ABC!@#@!#
console.log("".toLowerCase()); // 
console.log("   ".toLowerCase()); //

console.log("\n-----------\n");
//  String - exctracting Characters

let city = "CHICAGO";
console.log(city[0]); // C
console.log(city[3]); // C
console.log(city[6]); // O
console.log(city[9]); // undefined

let firstChar = city[0];

console.log(firstChar);
console.log(typeof firstChar);

// charAt() function SAME AS YOU ARE USING - []
console.log(city.charAt()); // C

console.log(city.charAt(city.length - 1)); // O
// tricky part

console.log(city.charAt(7));  //empty
console.log(city.charAt(100)); //empty
console.log(city.charAt(-3)); // empty

console.log(typeof city[100]); // undefined

console.log(typeof city.charAt(100)); // string becuase is empty

// charCodeAt() ASCII TABLE 

let country = "USA";
console.log(country.charCodeAt(0)); // 85
console.log(country.charCodeAt(1)); // 83
console.log(country.charCodeAt(2)); // 65





let fname = "Johne"

console.log(fname[Math.floor(fname.length/2)]);


let quote = "Hello how are you";

console.log(quote.replace("how", "123"));

console.log(quote.endsWith("you")); // false

let name1 = "Jasin";
console.log(name1.slice(1, 4));
console.log(name1.replace("Jasin", "John"));
