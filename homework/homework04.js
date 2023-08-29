
/*
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).
*/
console.log('\nTask 01\n');

for (let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}


/*
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).
*/
console.log("\nTask 02\n");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

/*
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).
*/

console.log("\nTask 03\n");

for (let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}

/*
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
*/
console.log("\nTask 04\n");

for (let i = 0; i <= 7; i++ ) {
    console.log(`The square of ${i} is = ${i * i}`);
}

/*
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
*/

console.log("\nTask 05\n");

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

/*
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.
*/

console.log("\nTask 06\n");

let number = Math.floor(Math.random() * 10) + 1;

for(let i = number; i > 1; i--) {
    number *= (i - 1);
    console.log(i);
}

console.log(number);

/*
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as below.
*/
console.log('\nTask 07\n');

let getRandomNumber;

let attempts = 0;

while (getRandomNumber % 5 !== 0) {
    getRandomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(getRandomNumber);
    attempts++;
}

console.log(`The random number is ${getRandomNumber} and it took ${attempts} attempt/s to generate it.`);

/*
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
*/
console.log("\nTask 08\n");

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countries);
console.log(countries.sort());

/*
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false
*/

console.log("\n Task 09 \n");

const cartoon = ['Scooby Doo', 'Snoopy','Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoon);
console.log(cartoon.includes('Pluto'));

/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false
*/
console.log('\nTask 10\n');

const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cartoonCats.sort());

console.log(cartoonCats.includes('Garfield' && 'Felix'));

/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element
*/

const numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/*
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.
*/

const object = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];

console.log(object);
let count = 0;
let att = 0;
for (let i = 0; i < object.length; i++) {
    if (object[i][0].toLowerCase() === "p" || object[i][0].toLowerCase() === "b") count++; {
        if (object[i].toLowerCase().includes("book") || object[i].toLowerCase().includes("pen")) att++;
    }

}
console.log(`Elements starting with 'B' or 'P' = ${count}`)
console.log(`Elements having "book" or "pen" = ${att}`);

/*
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

*/
console.log('\nTask 13\n');

const num = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

let attemts1 = 0;
let attemts2 = 0;
let attemts3 = 0;

console.log(num);

for (let i = 0; i < num.length; i++) {   
    if (num[i] > 10) attemts1++;
    else if(num[i] < 10) attemts2++;
    else attemts3++;
}
console.log(`Elements that are more than 10 = ${attemts1}`);
console.log(`Elements that are less than 10 = ${attemts2}`);
console.log(`Elements that are 10 = ${attemts3}`);

/*
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.
*/
console.log('\nTask 14\n');
const firstArray = [5, 8, 13, 1, 2];
const secArray = [9, 3, 67, 1, 0];
const thirdArray = [];


for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] > secArray[i]) thirdArray.push(firstArray[i]);
    else thirdArray.push(secArray[i]);
}
console.log(`1st array is = ${firstArray}`);
console.log(`2nd array is = ${secArray}`);
console.log(`3rd array is = ${thirdArray}`);

/*
Write a function named as firstDuplicate() which takes an array
 argument and returns the first duplicated number in the array when invoked.

NOTE: Make your code dynamic that works for any array and return -1 if 
there are no duplicates in the array. For two elements to be considered as duplicated, 
value and data types of the elements must be same.
*/
console.log('\nTask 15\n');

function firstDuplicate(Array) {
        let firstDuplicate = null;
    for (let i = 0; i < Array.length; i++) {
        let currentNum = Array[i];
        let rest = Array.slice(i + 1);
        if (rest.includes(currentNum)) {
            firstDuplicate = currentNum
               break;
        }
    }

    if(firstDuplicate === null) return -1;
    else return firstDuplicate;
}


console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3]));
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar']))



/*
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
*/
console.log('\nTask 16\n');

function getDuplicates(Array) {
    let duplicates = [];
    for(let i = 0; i < Array.length; i++ ) {

        let theDuplicate = Array[i];

        let theRest = Array.slice(i + 1);

        if (theRest.includes(theDuplicate)){
        if (!duplicates.includes(theDuplicate))
        duplicates.push(theDuplicate);
        }
        }
        return duplicates;
    }

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));

/*
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string
*/
console.log('\nTask 17\n');

function reverseStringWords(word) {
    let string = word.split(' ')

    for (let i = 0; i < string.length; i++) {
       string[i] = string[i].split('').reverse().join('');
    }

    const reverseWord = string.join(' ');

    return reverseWord
}
    

console.log(reverseStringWords('Hello World'));
console.log(reverseStringWords('I like JavaScript'));
console.log(reverseStringWords('Hello'));
console.log(reverseStringWords(''));
console.log(reverseStringWords(' '));

/*
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.
*/
console.log('\nTask 18\n');

function getEvens(x, y) {
    let even = [];
    
    for (let i =  Math.min(x, y); i <=  Math.max(x, y); i++) {

        if (i % 2 === 0 )
        even.push(i)
        
    }
    return even;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

/*
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.
*/

console.log('\nTask 19\n');

function getMultipleOf5(x, y) {
    const number = [];

    let num1 = Math.min(x, y);
    let num2 = Math.max(x, y);
    for (let i = num1; i <= num2; i ++) {
        if(i % 5 === 0) 
        number.push(i)
    }
    if (x < y) return number;
    else return number.reverse()
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

/*
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
*/

function fizzBuzz(x, y) {
    const Array = [];

    for (let i = Math.min(x, y); i <= Math.max(x, y); i++){
        if (i % 3 === 0 && i % 5 === 0) Array.push('FizzBuzz');
        else if (i % 3 === 0) Array.push('Fizz');
        else if (i % 5 === 0) Array.push('Buzz');
        else Array.push(i);
    }
    return Array.join(' | ');
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));
