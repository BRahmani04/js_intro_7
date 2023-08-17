

let num1 = 5, num2 = 10.5;

console.log(num1); // 5
console.log(num2); // 10.5

console.log(num1 + num2); // 15.5

console.log(num1 * num2);// 52.5

console.log(num1 - num2); // -5.5


let a = 2, b = 5, c = "10", d = "20";

console.log(a + b); // 7
console.log(c + d); // "1020"
console.log(d / a); //10

 // NaN - NOT A NUMBER

console.log(NaN); // NaN
console.log(typeof NaN); //number

console.log("  " * 5); // 0
console.log(" * 5"); // 0
console.log("hello" * 5); // NaN

console.log( 0 / 0); // NaN
console.log(0 / 5); 0
console.log(5 / 0); //infinity

// Infinity & -Infinity

console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number

//isNaN( function
console.log(isNaN(5)); // false
console.log(isNaN(10.5)); // false - its a number
console.log(isNaN("Hello")); //true -its not a number


// BigInt

let i1 = 12345678901234567890;
let i2 = 12345678901234567890n;
let i3 = BigInt(12345678901234567890n);
let i4 = 1;

console.log(i1); // 12345678901234567890
console.log(i2);// 12345678901234567890n
console.log(i3);// 12345678901234567890n
console.log(i2 + BigInt(i4)); // 12345678901234567891n - it adds 1



