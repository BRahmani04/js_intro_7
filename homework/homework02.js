

console.log("\nTask 01\n");

let str1 = "5", str2 = "2";
let num1 = Number(str1), num2 = Number(str2);

console.log(`The sum of 5 and 2 is = ${num1 + num2}`);
console.log(`The product of 5 and 2 is = ${num1 * num2}`);
console.log(`The division of 5 and 2 is = ${num1 / num2}`);
console.log(`The substraction of 5 and 2 is = ${num1 - num2}`);
console.log(`The remainder of 5 and 2 is = ${num1 % num2}`);
console.log(`The exponentiation of 5 and 2 is = ${num1 ** num2}`);


console.log("\nTask 02\n");

let s1 = "200", s2 = "-50";
let number1 = Number(s1), number2 = Number(s2);

console.log(`The greatest value is = ${Math.max(number1, number2)}`);
console.log(`The smallest value is = ${Math.min(number1, number2)}`);
console.log(`The average is =  ${(number1 + number2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(number1 - number2)}`);

console.log("\nTask 03\n");

let n01 = Math.floor(Math.random() * 50) + 1;
let n02 = Math.floor(Math.random() * 50) + 1;

console.log(n01);
console.log(n02);

console.log(`The absolute difference between numbers is = ${Math.abs(n01 - n02)}`);

console.log("\nTask 04\n");

let number01 = Math.floor(Math.random() * 50) + 1;
let number02 = Math.floor(Math.random() * 50) + 1;
let number03 = Math.floor(Math.random() * 50) + 1;
let number04 = Math.floor(Math.random() * 50) + 1;
let number05 = Math.floor(Math.random() * 50) + 1;

console.log(number01);
console.log(number02);
console.log(number03);
console.log(number04);
console.log(number05);

console.log(`The max value = ${Math.max(number01, number02, number03, number04, number05)}`);
console.log(`The min value = ${Math.min(number01, number02, number03, number04, number05)}`);


console.log("\nTask 05\n");

let num_1 = Math.floor(Math.random() * 51) + 50;
let num_2 = Math.floor(Math.random() * 51) + 50;
let num_3 = Math.floor(Math.random() * 51) + 50;

console.log(num_1);
console.log(num_2);
console.log(num_3);

console.log(`The number 1 = ${num_1}`);
console.log(`The number 2 = ${num_2}`);
console.log(`The number 3 = ${num_3}`);
console.log(`The sum of numbers is = ${num_1 + num_2 + num_3}`);

console.log("\nTask 06\n");

let n_1 = Math.floor(Math.random() * 100) + 1;
let n_2 = Math.floor(Math.random() * 100) + 1;
let n_3 = Math.floor(Math.random() * 100) + 1;

console.log(n_1);
console.log(n_2);
console.log(n_3);

console.log(n_1 > 25 && n_2 > 25 && n_3 > 25);

console.log("\nTask 07\n");

let name = "David";

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name.charAt(name.length -1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0 , 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(2)}`);







