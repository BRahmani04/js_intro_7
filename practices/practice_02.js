

console.log("\nTask 1\n");

/*Requirement:
Write a program that extracts expected values from a given String using JS String functions.
"I like apples and oranges"                         -> "APPLE"
"Java is not a scripting programming language"      -> "JavaScript”
"I don't like books"                                -> "I like books"
*/

let word1 = "I like apples and oranges";
let word2 = "Java is not a scripting programing language";
let word3 = "I don't like books"

console.log(word1.slice(7, 12).toUpperCase()); // APPLE
console.log(word2.slice(0, 4) + word2[14].toUpperCase() + word2.slice(15, 20)); // JavaScript
console.log(word3.replace("don't ", "")); // I like books
console.log(word3[0] + word3.slice(7)); // I like books


console.log("\n Task 2\n");

/*
 Requirement:
Assume that you are given a String of any length.
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters
    -if it has any vowel, then print true
    -Else, print false
    Vowels = a, e, i, u, o, A, E, I, U, O
Test Data 1:
let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true
Test Data 2:
let s1 = "";
Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

let s1 = "JavaScript"

console.log(`The length is = ${s1.length}`); // The length is = 10
console.log(`The first char is = ${s1[0]}`); // The first char is = J
console.log(`The last char is = ${s1[s1.length-1]}`); //The last char is = t
console.log(
s1.toLowerCase().includes("a") ||
s1.toLowerCase().includes("e") ||
s1.toLowerCase().includes("i") ||
s1.toLowerCase().includes("u") ||
s1.toLowerCase().includes("o") ); // true


console.log("\nTask 03\n");

/* Assume that you are given a String of any odd length.
Find the middle character for the given String.
*/

let name = "Yazan";

console.log(name[(name.length-1)/ 2]); // z




console.log("\nTask 04\n");
/*Assume that you are given a String of any even length including empty.
Find the middle 2 characters for the given String.
Test Data 1:
let s3 = "";
Expected Result 1:
undefined
Test Data 2:
let s3 = "abcd";
Expected Result 2:
"bc"
Test Data 3:
let s3 = "JavaScript";
Expected Result 3:
"Sc"
*/

let name1 = "JavaScript";

console.log(name1.slice(name1.length/2 - 1, name1.length/2 +1));



console.log("\n Task 05\n");

/*Write a program that divides the given String. Assume the length of the String will at least
be 4.
-Find and print the first two characters
-Find and print the last two characters
-Find and print all the middle characters other than first and last 2 characters
Test Data 1:
let s4 = "abcd";
Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are =
Test Data 2:
let s4 = "JavaScript";
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = "JavaScript"

console.log(`The first 2 characters are = ${s4.slice(0, 2)}`);
console.log(s4.slice(s4.length-2));
console.log(s4.slice(2, s4.length-2));


console.log("\n Task 06\n")
/*Assume that you are given a String that has at least 2 characters.
If first 2 and last 2 characters are same, then print true. Otherwise, print false.
*/


let s5 = "Orange";
let first2 = s5.slice(0, 2), last2 = s5.slice(s5.length-2);
console.log(first2 === last2);

console.log(s5.startsWith(s5.slice(0,2) && s5.endsWith(0, 2))); // true

console.log(first2.includes(last));

console.log("\nTask 07\n");

/*Requirement:
Write a program that gets rid of first and last characters of given two String values. Then, add these
two String values to each other and print the result.
Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1:
rang
*/


let s61 = "1234";
let s62 = "Green";

console.log(s61.slice(1, s61.length-1) + s62.slice(1, s62.length -1));


console.log("\nTask 08\n");

/*Write a program that checks if a given String starts and ends with xx.
-If given String starts and ends with xx, then print true.
-Otherwise, print false
*/

let s10 = "xxJohnxx";

console.log(s10.startsWith("xx") && s10.endsWith("xx")); // true
console.log(s10.slice(0, 2).includes("xx") && s10.slice(s10.length-2).includes("xx")); // true
console.log(s7.slice(0, 2) === "xx" && s10.slice(s10.length-2) === "xx"); // true

console.log("\nTask 09\n");

let s8 = "I like Iphone"

let firstWord = s8.slice(0, s8.indexOf(" "));
let lastWord = s8.slice(s8.lastIndexOf(" ") + 1);
let middle = s8.slice(s8.indexOf(" "), s8.lastIndexOf(" ") + 1);

let swapped = lastWord + middle + firstWord;

console.log(swapped);


console.log("\nTask 10\n");

/* 
Write a program that counts the number of words in a given sentence as a String.
Assume you will not be given redundant whitespaces and at least one word.
Test Data 1:
let s8 = "Good morning";
Expected Result 1:
2
Test Data 2:
let s7 = "Hello";
Expected Result 2:
1
Test Data 3:
let s7 = "I like Apple";
Expected Result 3:
3
Test Data 4:
let s7 = "JavaScript is nice to learn";
Expected Result 4:
5
*/

let s9 = "Good morning"
console.log(s9.length - s9.replaceAll(" ", ""). length +1); // 2
