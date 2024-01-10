
/*
Task 1
Requirement:
Convert given Strings below to number data types and find their sum, product, division, subtraction, remainder and exponentiation.

let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25


NOTE: expected results should exactly match!!!
*/
console.log("\nTask 01\n");

let str1 = "5", str2 = "2";
let num1 = Number(str1), num2 = Number(str2);

console.log(`The sum of 5 and 2 is = ${num1 + num2}`);
console.log(`The product of 5 and 2 is = ${num1 * num2}`);
console.log(`The division of 5 and 2 is = ${num1 / num2}`);
console.log(`The substraction of 5 and 2 is = ${num1 - num2}`);
console.log(`The remainder of 5 and 2 is = ${num1 % num2}`);
console.log(`The exponentiation of 5 and 2 is = ${num1 ** num2}`);

/*
Task 2
Requirement:
Convert given Strings below to number data types and find the greatest and smallest values and find the average and absolute difference of them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!!

*/
console.log("\nTask 02\n");

let s1 = "200", s2 = "-50";
let number1 = Number(s1), number2 = Number(s2);

console.log(`The greatest value is = ${Math.max(number1, number2)}`);
console.log(`The smallest value is = ${Math.min(number1, number2)}`);
console.log(`The average is =  ${(number1 + number2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(number1 - number2)}`);
/*
Task 3
Requirement:
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included)
 
Test Data: 5, 27
Expected Output:
The absolute difference between numbers is = 22

*/
console.log("\nTask 03\n");

let n01 = Math.floor(Math.random() * 50) + 1;
let n02 = Math.floor(Math.random() * 50) + 1;

console.log(n01);
console.log(n02);

console.log(`The absolute difference between numbers is = ${Math.abs(n01 - n02)}`);

/*
Task 4
Requirement:
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included)
 
Test Data: 3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/
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

/*
Task 5


Requirement:
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 Test Data:55, 67, 90
 Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212

*/
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

/*
Task 6
Requirement:
Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) and find if all the numbers are more than 25.

Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.

*/
console.log("\nTask 06\n");

let n_1 = Math.floor(Math.random() * 100) + 1;
let n_2 = Math.floor(Math.random() * 100) + 1;
let n_3 = Math.floor(Math.random() * 100) + 1;

console.log(n_1);
console.log(n_2);
console.log(n_3);

console.log(n_1 > 25 && n_2 > 25 && n_3 > 25);

/*
Task 7
Requirement:
Assume you are given a name let name = "David"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them

Expected Output:The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/
console.log("\nTask 07\n");

let name = "David";

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name.charAt(name.length -1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0 , 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(2)}`);







