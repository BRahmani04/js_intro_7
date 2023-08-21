
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num1 = getRandomNumber(1,10);
console.log(num1);
console.log(num1 % 2 === 0);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = getRandomNumber(1, 10);
console.log(num1);
console.log(num1 % 2 !== 0);

/* Find if a number is positive or not.
Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is positive, print true.
Otherwise, print false.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = getRandomNumber(-5, 5);
console.log(num1);
console.log(num1 > 0);

// if its negative then 
console.log(num1 < 0);

/*
Find if a number is divisible by 5 or not.
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 5, print true.
Otherwise, print false.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num1 = getRandomNumber(1, 50);
console.log(num1);
console.log(num1 % 5 === 0);
/*
Find if the number is divisible by 7
*/

console.log(num1 % 7 === 0);

/*
Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the sum of the numbers and print it.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(1,10);
console.log(num1, num2);
console.log(num1 + num2);

/*
Calculate the absolute difference between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the absolute difference of the numbers and print it.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(1, 10);
console.log(num1, num2);
console.log(Math.abs(num1 - num2));

/*
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let mile = getRandomNumber(1, 10);
console.log(mile);
console.log(mile * 1.6);

/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
If the numbers are equal, print true.
Otherwise, print false.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = getRandomNumber(1, 3);
let num2 = getRandomNumber(1, 3);
console.log(num1, num2);
console.log(num1 === num2);

/*
Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let age = getRandomNumber(1, 100);
console.log(age);
console.log(age >= 16);

/*
Find the greatest number between 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it.
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(1, 10);
let num3 = getRandomNumber(1, 10);
console.log(num1, num2, num3);
console.log(Math.max(num1, num2, num3));

/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the average of the numbers and print it.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(1, 10);
let num3 = getRandomNumber(1, 10);
console.log(num1, num2, num3);
console.log((num1 + num2 + num3) / 3);

/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(1, 10);
let num3 = getRandomNumber(1, 10);
console.log(num1, num2, num3);
console.log(Math.abs(Math.max(num1, num2, num3) - Math.min(num1, num2, num3)));

/*
Find the quarter of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = getRandomNumber(1, 100);
console.log(num1);
if (num1 <= 25) console.log("1st quarter");
else if (num1 <= 50) console.log("2nd quarter");
else if (num1 <= 75) console.log("3rd quarter");
else console.log("4th quarter");

/*
Find the midpoint of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num = getRandomNumber(1, 100);
console.log(num);
if (num <= 50) console.log("1st half");
else console.log("2nd half");

/*
Find if sum of 2 random numbers is even or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(1, 10);
console.log(num1, num2);
console.log((num1 + num2) % 2 === 0);

/*
Find if product of 2 random numbers is odd or not.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the product of the random numbers is odd, print true.
Otherwise, print false.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(1, 10);
console.log(num1, num2);
console.log((num1 * num2) % 2 !== 0);

/*
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
*/
function rectangleArea(x, y) {
    return x * y
}
console.log(rectangleArea(5, 4));

/*
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
*/
function doubleWord(word) {
    return word + word
}
console.log(doubleWord("Tech"));

/*
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
*/
function firstTwoCharacters(word) {
    if (word.length > 1) return word.slice(0, 2);
else return word
}
console.log(firstTwoCharacters("tech"));
console.log(firstTwoCharacters("global"));
console.log(firstTwoCharacters(""));
console.log(firstTwoCharacters("1"));

/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/
function firstTwoCharacters(word) {
    if (word.length > 1) return word.slice(-2);
    else return word
}
console.log(firstTwoCharacters("tech"));
console.log(firstTwoCharacters("global"));
console.log(firstTwoCharacters("bali"));
console.log(firstTwoCharacters("1"));

/*
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/
function firstTwoCharacters(word) {
    if (word.length > 1) return word[0] + word[word.length-1];
    else return word
}
console.log(firstTwoCharacters("tech"));
console.log(firstTwoCharacters("global"));
console.log(firstTwoCharacters("bali"));
console.log(firstTwoCharacters("c"));
?

/*
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked.
NOTE: If the given word is empty, then return the empty string back.
*/
function middle(word) {
    if (word.length % 2 === 0) return word.slice(word.length/2 - 1, word.length/2 + 1);
    else return word[(word.length-1) / 2];
}
console.log(middle("tech"));
console.log(middle("global"));
console.log(middle("bali"));
console.log(middle("abcde"));

/*
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
*/

function longer(word1, word2) {
    if (word1.length <= word2.length) return word2;
    else return word1
} 

console.log(longer("Tech", "Global"))
console.log(longer("Hello", "Hi")) 
console.log(longer("Hello", "World"))

/*
Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
*/

function shorter(word1, word2) {
    if (word1.length >= word2.length) return word2;
    else return word1
}

console.log(shorter("Tech", "Global"))
console.log(shorter("Hello", "Hi")) 
console.log(shorter("Hello", "World"))
/*
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
*/

function concat(word1, word2) {
    return word1 + word2;
}
console.log(concat("Tech", "Global"))
console.log(concat("Hello", "Hi")) 
console.log(concat("Hello", "World"))

/*
Write a function named as startsVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
*/
function startsVowel(word) {
    return "AEOUIaeoui".includes(word[0]);
}

console.log(startsVowel("tech"));
console.log(startsVowel("airo"));
console.log(startsVowel("Apple"));
console.log(startsVowel("orange"));

function firstLast(word) {
    if (word.length > 1) return word[0] + word.slice(-1);
    else return word;
}

console.log(firstLast("Tech"));

function middle(word) {
    if (word.length % 2 === 0) return word.slice(word.length/2 - 1, word.length/2 + 1);
    else return word[(word.length-1) / 2];
}
console.log(middle("Tech"));
console.log(middle("")); 

function longer(word1, word2) {
    if (word1.length >= word2.length) return word2
    else return word1
}
console.log(longer("Tech", "WOrld"));
console.log(longer("hello", "hi"));
console.log(longer("Hello" , "world"));