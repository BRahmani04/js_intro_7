// Task -1
/*Task1:
Requirement
-Write a program that outputs below sentences
-Double quotations must be displayed in your console when you run the code
-Every line below must be printed with a separate console.log() statement
 
I start to practice "JavaScript" today, and I like it.
The secret of getting ahead is getting started.
"Don't limit yourself. "
Invest in your dreams. Grind now. Shine later.
It's not the load that breaks you down, it's the way you carry it.
The hard days are what make you stronger.
You can waste your lives drawing lines. Or you can live your life crossing them
*/
console.log("\nTask-1\n")

console.log("I start to practice \"JavaScript\" today, and I like it.");
console.log("\nThe secret of getting ahead is getting started.");
console.log("\n\"Don't limit yourself.\"");
console.log("\nInvest in your dreams. Grind now. Shine later.")
console.log("\nIt's not the load that breaks you down, it's the way you carry \nit.");
console.log("\nThe hard days are what make you stronger.");
console.log("\nYou can waste your lives drawing lines. Or you can live your \nlife crossing them.");


 

console.log("\nTask-2\n")
/*Task2:
Requirement
-Write a program that prints the whole below text in ONLY 1 console.log() statement
 (you can use escape sequences to insert line or a tab)
 
   JavaScript is a high-level programming language primarily used to build web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js.

    It is open source and has a huge community support, which means there are plenty of resources and support available for learning. It uses a syntax like other programming languages and easy to learn.

*/
console.log("\tJavaScript is a high-level programming language\nprimarily used to build web applications. It is not limited\nto the web; it can also be used for the backend\ndevelopment with technologies like Node.js. \n\n \tIt is open source and has a huge community support,\nwhich means there are plenty of resources and support\navailable for learning. It uses a syntax like other\nprogramming languages and easy to learn. ");


/*Task3:
Requirement
-Write a program that stores below information with proper data types and output all variables with separate console.log() statements.

myAge
myFavoriteNumber
myHeight
myWeight
myFavoriteLetter

*/

console.log("\nTask-3\n");

let myAge = 24;
let myFavoriteNumber = 4;
let myHeight = "6'3";
let myWeight = 230;
let myFavoriteLetter = "B";

console.log(myAge);
console.log(myFavoriteNumber);
console.log(myHeight);
console.log(myWeight);
console.log(myFavoriteLetter);

/*Task4:
Requirement
-Create 2 variables called as num1, num2 and and store values of 25, 35 in these variables, respectively. 
Then, output the sum of the numbers with a proper message as given below.

Test Data:25, 35

Expected output: 
The sum of the numbers = 60

*/

console.log("\nTask-4\n");

let num1 = 25; 
let num2 = 35;

console.log("The sum of the numbers = " + (num1 + num2));

/*Task5:
Requirement
-Create 2 variables called as n1, n2 and and store values of 5, 7 in these variables, respectively.
 Then, output the product of the numbers with a proper message as given below.

Test Data:5, 7

Expected output: 
The product of the numbers = 35

*/

console.log("\nTask-5\n")

let n1 = 5;
let n2 = 7;

console.log("The product of the numbers = " + (n1 * n2));

/*Task6:
Requirement
-Create 2 variables called as number1, number2 and and store values of 24, 10 in these variables, respectively. 
Then, output the sum (addition), multiplication, subtraction, division and remainder of these numbers with a proper message as given below.

Test Data:24, 10

Expected output: 
The sum of the numbers is = 34
The product of the numbers is = 240
The subtraction of the numbers is = 14
The division of the numbers is = 2.4
The remainder of the numbers is = 4
*/
console.log("\nTask-6\n");

let number1 = 24;
let number2 = 10

console.log("The sum of the numbers is = " + (number1 + number2));
console.log("The product of the numbers is = " + (number1 * number2));
console.log("The substraction of the numbers is = " + (number1 - number2));
console.log("The division of the numbers is = " + (number1 / number2));
console.log("The remainder of the number is " + (number1 % number2));

/*Task7:
Requirement:
- Create 2 variables called as i1, i2 and and store values of 7, 11 in these variables, respectively. Then, output the average of the numbers.
Test Data:7, 11
Expected Output:
The average of the numbers is: 9

*/
console.log("\nTask-7\n");

let i1 = 7;
let i2 = 11;

console.log("The average of the number is: " + ((i1 + i2) / 2));

/*Task8:
Requirement:
- Create 5 variables called as a1, a2, a3, a4, a5 and and store values of 6, 10, 12, 15, 17 in these variables, respectively.
 Then, output the average of the numbers.
Test Data:6, 10, 12, 15, 17
Expected Output:
The average of the numbers is: 12
*/
console.log("\nTask-8\n");

let a1 = 6;
let a2 = 10;
let a3 = 12;
let a4 = 15;
let a5 = 17;

console.log("The average of the number is: " + ((a1 + a2 + a3 + a4 + a5) / 5));

/*Task9:
Requirement:
- Create 3 variables called as b1, b2, b3 and and store values of 5, 6, 10 in these variables, respectively. 
Then, output the square of each number entered by user.
NOTE: Square of number means number multiplied with itself
Test Data:5, 6, 10
Expected Output:
The 5 multiplied with 5 is = 25
The 6 multiplied with 6 is = 36
The 10 multiplied with 10 is = 100
*/
console.log("\nTask-9\n");

let b1 = 5;
let b2 = 6;
let b3 = 10;

console.log("The 5 multiplied with 5 is = " + (b1 * b1));
console.log("The 6 multiplied with 6 is = " + (b2 * b2));
console.log("The 10 multiplied with 10 is = " + (b3 * b3));

/*Task10:
Requirement:
- Create a variable called as side to be assumed as one side of a square and store value of 7 in that variable. 
Then, output the area and perimeter for that square.

NOTE: area of a square = side * side
            perimeter of a square = 4 * side
 
Test Data:7
Expected Output:
The perimeter of the square = 28 
The area of the square = 49
*/
console.log("\nTask-10\n");

let side = 7;

console.log("The perimeter of the square = " + (4 * side));
console.log("The area of the square = " + (side * side));

/*Task11:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	favBook = JS Algorithms & Data Structures
	favColor = Blue
	favNumber = 7

Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is  Blue
The favorite number is  7
*/
console.log("\nTask-11\n");

let favBook = "JS Algorithms & Data Structures";
let favColor = "Blue";
let favNumber = 7;

console.log("The favorite book is " + favBook + "\nThe favorite color is " + favColor + "\nThe favorite number is " + favNumber);

/*Task12:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	firstName = John
	lastName = Doe
	age = 45
	emailAddress = johndoe@gmail.com
	phoneNumber = (123) 123 1234
	address = 123 St Chicago IL 12345
Expected output: (it should exactly be same as below paragraph)
          User who joined this program is John Doe. John’s age is 45. John’s email address is johndoe@gmail.com, phone number is (123) 123 1234, and address is 123 St Chicago IL 12345.
*/
console.log("\nTask-12\n");

let firstName = "John";
let lastName = "Doe";
let age = 45;
let emailAddress = "johndoe@gmail.com";
let phoneNumber = "(123) 123 1234";
let address = "123 St Chicago IL 12345";

console.log("\tUser who joined this program is " + firstName + " " + lastName + "." + " " + "John's \nage is " + age + "." + " " + "John's email address is " + emailAddress + "," + "\nphone number is " + phoneNumber + "," + " " + "and addres is " + address + "."); 


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


console.log("\nTASK 01");

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let number1 = getRandomNumber(1, 100);
let number2 = getRandomNumber(1, 100);
let number3 = getRandomNumber(1, 100);

console.log(number1, number2, number3);

let result = number1 + number2 + number3;

console.log(result);

console.log(result / 3 >= 50);

console.log("\nTask 02\n");

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let num1 = getRandomNumber(1, 3);
let num2 = getRandomNumber(1, 3);
let num3 = getRandomNumber(1, 3);

console.log(num1, num2, num3);
if (num1 === num2 && num1 === num3) {
     console.log("TRIPLE MATCH");
}
else if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
     console.log("NO MATCH");
}     
else {
    console.log("DOUBLE MATCH");
}

console.log("\nTask 03\n");


function hasA(str) {
    return str.toLowerCase().includes("a");
}

console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));

console.log("\nTask 04\n");

function doubleOrTripleWord(word) {
    if (word.length % 2 === 0)  return  word + word + word;
    else return  word + word;
    
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("APPLE"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

console.log("\nTask 05\n");

function firstWord(str1) {
   if (str1.includes(" ")) return str1.slice(0, str1.indexOf(" "));
   else return str1;
}

console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord("  "));

console.log("\nTask 06\n");

function lastWord(str2) {
    if(str2.includes(" ")) return str2.slice(str2.lastIndexOf(" ")).trimStart();
    else return str2;
}

console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord("  "));

console.log("\nTask 07\n");

function firstLastWord (str3) {
    if(str3.includes(" ")) return str3.slice(0, str3.indexOf(" ")) + str3.slice(str3.lastIndexOf(" ")).trimStart();
    else return str3 + str3
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord("  "));

console.log("\nTask 08\n")

function startVowel(string1) {
    return "aeiouAEIOU".includes(string1[0])
}


console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("  "));
console.log(startVowel("123"));

console.log("\nTask 09\n");


function swap4(string5) {
    if (string5.length >= 8) {
        return string5.slice(string5.length - 4) + (string5.slice(4, string5.length - 4)) + (string5.slice(0, 4));
    }
    else {
        return "";
    }
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4(" "));
console.log(swap4("Apple"));

console.log("\nTask 10\n");

function swapLastFirstWord (word) {
    if (word.trim().includes(" ")) return word.slice(word.lastIndexOf(" ")) + word.slice(word.indexOf(" "), word.lastIndexOf(" ")) + " " + word.slice(0, word.indexOf(" "));
    else return "";
}
console.log(swapLastFirstWord("Hello World"));
console.log(swapLastFirstWord("I like JavaScript"));
console.log(swapLastFirstWord("abc"));
console.log(swapLastFirstWord("foo bar foo bar"));
console.log(swapLastFirstWord("Hello "));
console.log(swapLastFirstWord(""));
console.log(swapLastFirstWord(" "));


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
console.log('\nTask 20\n');

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


/*
Write a function named countPos() which takes an array of numbers as an argument
 and returns how many elements are positive​ when invoked. 
*/
console.log('\n Task 01\n');

function countPos(numbers) {
    let count = 0;
    for (const number of numbers) {

        if (number > 0) count++;
    }

    return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

/*
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 
*/
console.log('\nTask 02\n');

function countA(Array) {
    let count = 0;
    for (const number of Array.toLowerCase()) {
        if (number.includes('a')) count++;
    }
    return count;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

/*
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
*/
console.log('\n Task 03\n');

function countVowels(Array) {
    let count = 0;
    for (const number of Array.toLowerCase()) {
        if (('AEOUIaeoui'.includes(number))) count++;
    }
    return count;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

/*
Write a function named as countConsonants() which takes a string word as an argument
 and returns the count of the consonant letters when invoked.
*/
console.log('\n Task 04\n');

function countConsonants(Array) {
    let count = 0;
    for (const number of Array.toLowerCase()) {
        if ((!'AEOUIaeoui'.includes(number))) count++;
    }
    return count;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

/*
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.
*/

console.log('\n Task 05\n');

function countWords(array) {
    return array.trim().split(' ').length;
}

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));


/*
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
*/
console.log('\n Task 06\n');

function factorial(number) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}


console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/*
Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity
*/
console.log('\n Task 07\n');

function isPalindrome(str) {

    reverseString = str.split('').reverse().join('');

    return str.toLowerCase() === reverseString.toLowerCase();
}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

/*
Write a function named as countMultipleWords() which takes an array as an argument
 and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
*/
console.log('\n Task 08\n');

function countMultipleWords(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let str = array[i].trim();
        let word = str.split(' ');
        if (word.length > 1) count++
    }
    return count;
}

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]));
console.log(countMultipleWords([]));


/*
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 3
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0
*/
console.log('\n Task 09\n');

function count3OrLess(string) {
    const arr = string.split(' ');
    let count = 0;
    for (const word of arr) {
        if (word.length <= 3 && word.length !== 0) count++

    }
    return count;
}
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

/*
Write a function named as isPrime() which takes a number as an argument and
 returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
*/
console.log('\n Task 10\n');

function isPrime(number) {
    if (number < 2) return false;
    for (let i = 0; i < number; i++) {
        if (number % i === 0) return true;
    }
    return false
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

/*
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
*/
console.log('\n Task 11\n');

function add(arr1, arr2) {
    const sum = [];
    const max = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < max; i++) {
        let num = arr1[i] || 0;
        let number = arr2[i] || 0;
        sum.push(num + number);
    }
    return sum;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));



/*
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.
*/
console.log('\n Task 12\n');

function removeExtraSpaces(str) {
    return str.split(' ').filter(x => x.length >= 1).join(' ');
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("   Hello  World  "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

/*
Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
*/
console.log('\n Task 13\n');

function findClosestTo10(arr) {
    let num = Infinity;
    for (let i = 0; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - 10);
        if (arr[i] === 10) continue;
        else if (diff < Math.abs(num - 10)) num = arr[i];
        else if (diff === Math.abs(num - 10) && arr[i] < num) num = arr[i];
        
    }
    return num;
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57,]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));


/*
Write a function named as isEmailValid() which takes a string email as an argument
 and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.
*/

console.log('\n Task 14\n');


function isEmailValid(string) {
    if (string.includes(' ')) return false
    else if (!string.includes('.com')) return false
    else if (string.split('@').length > 2) return false
    else if (string.split('@')[0].length < 2) return false
    else if (string.split('@')[1].split('.')[0].length < 2 ) return false
    else if (string.split('.')[1].length < 2) return false
   return true
}
console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@gmail.com"));


/*
Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

*/

console.log('\n Task 15\n');

function isPasswordValid(string) {
    if (string.length < 8 || string.length > 16 || string.includes(' ')) return false
    
    let hasDigit = false;
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasCharacter = false;

    for (const char of string){
    
        if(char >= 0 && char <= 9)  hasDigit = true
        else if (char >= 'A' && char <= 'Z')  hasUpperCase = true
        else if (char >= 'a' && char <= 'z')  hasLowerCase = true
        else if ("!@#$%^&*()_+{}[]:;<>,.?~\\/-".includes(char))  hasCharacter = true
    }
    
   return hasDigit && hasUpperCase && hasLowerCase && hasCharacter;
}


console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd12345"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));

/*
Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.
*/
console.log('\n Task 01\n');

const noSpace = (str) => {
    return str.trim().split(' ').join('');
}

console.log(noSpace(''));
console.log(noSpace('JavaScript'));
console.log(noSpace("    Hello   ") );
console.log(noSpace(" Hello World  ") );
console.log(noSpace('Tech Global'));

/*
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/
console.log('\n Task 02\n');

const replaceFirstLast = (str) => {
    if (str.trim().length < 2) return "";
    return str[str.length-1] + str.slice(1, str.length - 1) + str[0];
};

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("  A   "));

/*
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/
console.log('\n Task 03\n');

const hasVowel = (string) => {
    for (const word of string){
        if ('aeoui'.includes(word.toLowerCase())){
            return true
        }
    }
    return false
};

console.log(hasVowel(''));
console.log(hasVowel('Javascript'));
console.log(hasVowel('Tech Global'));
console.log(hasVowel('1234'));
console.log(hasVowel('ABC'));

/*
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
*/
console.log('\n Task 04\n');

const checkAge = (number) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - number;
    if (number > currentYear) return 'AGE IS NOT VALID'
    else if (age < 16) return 'AGE IS NOT ALLOWED'
    else if (age >= 16 && age <= 120) return 'AGE IS ALLOWED';
   else return 'AGE IS NOT VALID' 
}

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));

/*
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.
*/
console.log('\n Task 05\n');

function averageOfEdges(n1, n2, n3) {
    return (Math.max(n1, n2 ,n3) + Math.min(n1, n2, n3) ) / 2;
};

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));

/*
Write a function named noA() which takes an array of strings as argument and will return a new array with all elements starting with "A" or "a" replaced with "###".
*/
console.log('\n Task 06\n');

const noA = (array) => {
    return array.map(str => {
        if (str.startsWith('a') || str.startsWith('A')) {
            return '###'
        }
        else return str
    })
};


console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]) );

/*
Write a function named no3and5() which takes an array of integer numbers as argument and will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
*/
console.log('\n Task 07\n');

const no3and5 = (array) => {
    return array.map(num => {
        if(num % 5 === 0) return 99;
        else if(num % 3 === 0 ) return 100;
        else if (num % 3 === 0 && num % 5 === 0) return 101;
        else return num;
    })
    
};

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

/*
Write a function named countPrimes() which takes an array of integer numbers as argument and will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
*/
console.log('\n Task 08\n');

const countPrimes = (array) => {
    let count = 0;
    for (let num of array){
    if (num < 2)  count
    else if (num % Math.sqrt(num) === 0) count
    else count++
    }
    return count
};

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));

/*
Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.
*/
console.log('\n Task 09\n');

const removeDuplicates = (array) => {
    return array.filter((value, index) => {
        return array.indexOf(value) === index
    });
    
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

/*
Write a method named isDateFormatValid() that takes a string as an argument and returns true if the given date is valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>
*/

console.log('\n Task 10\n');

const isDateFormatValid = str => {
    const date = str.trim().split('/')
    if(date.length !== 3) return false
    else if (date[0].length !== 2 || parseInt(date[0]) > 12) return false
    else if(date[1].length !== 2 || parseInt(date[1]) > 31) return false
    else if(date[2].length !== 4) return false
    else return true
    
}


console.log(isDateFormatValid(""))
console.log(isDateFormatValid("15/30/2020"))
console.log(isDateFormatValid("10-30-2020 "))
console.log(isDateFormatValid("10.30.2020") )
console.log(isDateFormatValid("5/30/2020"))
console.log(isDateFormatValid("05/30/2020 "))
console.log(isDateFormatValid("10/2/2020") )
console.log(isDateFormatValid("10/02/2020 "))


/*
Write a method named secondMax() takes an array argument and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.
*/


console.log('\n Task 11\n');

const secondMax = array => {
    if (array.length < 2 ){
        return array[0]
    }
    const numbersSort = array.sort((x, y) => y - x);
    const duplicate = numbersSort.filter((value, index) => array.indexOf(value) === index);

    return duplicate[1]
}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));

/*
Write a method named secondMin() takes an array argument and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.
*/
console.log('\n Task 12\n');

const secondMin = (array) => {
    if (array.length < 2) return array[0];
    const numSort = array.sort((x, y) => x - y);
    const dup = numSort.filter((value, index) => array.indexOf(value) === index);

    return dup[1]
};

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]));

/*
Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.
*/
console.log('\n Task 13\n');

const mostRepeated = (array) => {
    if (array.length < 2)
    return array[0];
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++){
            if(array[i] === array[j] && !arr1.includes(arr2)) arr1.push(array[i])
        }
        if(arr1.length > arr2.length) arr2 = arr1;
        arr1 = []
    }
    return arr2[0];
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]));



/*
Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter and false otherwise.
*/

console.log('\n Task 01\n');

function hasUpperCase(string) {
    let str = string.charCodeAt();
    if(str >= 65 && str <= 90){
        return true
} 
else return false
}

console.log(hasUpperCase("javascript")); 
console.log(hasUpperCase("John")); 
console.log(hasUpperCase("$125.0")); 
console.log(hasUpperCase("")); 

/*
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.
*/
console.log('\n Task 02\n');

const noDigit = (str) => str.split('').filter(x => isNaN(x)).join('');


console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));


/*
Write a function named noVowel() which takes a string argument and 
returns a new string with all vowels removed from the original string​.
*/

console.log('\n Task 03\n');

const noVowel = str => str.split('').filter(x => !('AEOUIaeoui'.includes(x))).join('')

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

/*
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. ​
*/

console.log('\n Task 04\n');

const no13 = (array) => array.map(x => x === 13 ? x = 0 : x = x)

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3,]));
console.log(no13([13, 13, 13, 13]));
console.log(no13([]));

/*
Write a function named middleInt() which takes three number arguments and return the middle number. ​
*/

console.log('\n Task 05\n');

const middleInt = (n1, n2, n3) => {
    let middle = [n1, n2, n3]
    let num = middle.sort((x,y) => x - y);
    return num[1]
}

console.log(middleInt(1, 2, 2))
console.log(middleInt(5, 5, 8))
console.log(middleInt(5, 3, 5))
console.log(middleInt(1, 1, 1))
console.log(middleInt(-1, 25, 10))

/*
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​
*/
console.log('\n Task 06\n');
const sumOfDigits = (str) => {
    let sum = 0;
    for(const num of str){
    if(Number(num)) sum += Number(num) 
    }
    return sum
}


console.log(sumOfDigits("Javascript"))
console.log(sumOfDigits("John's age is 29")) 
console.log(sumOfDigits("$125.0")) 
console.log(sumOfDigits(""))

/*
Write a function named arrFactorial() which takes an array of numbers as argument and 
return the array with every number replaced with their factorials.
*/
console.log('\n Task 07\n');
const arrFactorial = (array) => array.map(x => {
    let factorial = 1;
    for(let i = 1; i <= x ; i++){
    factorial *= i
    }
    return factorial;
})


console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));


/*
Write a function named categorizeCharacters() which takes a string word as argument and
 return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
*/

console.log('\n Task 08\n');

function categorizeCharacters(string) {
   
    let newArr = [];
    let newArr1 = [];
    let newArr2 = [];
    for (const word of string) {
        if ((word >= 0 && word <= 9)) newArr1.push(word);
        else if((word.toUpperCase() >= 'A' && word.toUpperCase() <= 'Z')) newArr.push(word);
        else if ("!@#$%^&*()_+{}[]:;<>,.?~\\/-".includes(word)) newArr2.push(word);
       
    }
    let result = [newArr.join(''), newArr1.join(''), newArr2.join('')];
    return result;
}
console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));

/*
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t.
*/
console.log(`\n Task 01 \n`);

function hasLowerCase(string) {
    let str = string.trim()
    for (const word of str) {
        if (word.charCodeAt() >= 97 && word.charCodeAt() <= 122) return true
    }
    return false
}

console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase(" a "));
console.log(hasLowerCase(""));
console.log(hasLowerCase("125$"));

/*
Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.
*/
console.log(`\n Task 02 \n`);

const noZero = (array) => array.filter(x => x !== 0);


console.log(noZero([0, 1, 10]));
console.log(noZero([1]));
console.log(noZero([1, 10]));
console.log(noZero([0, 0, 0]));

/*
Write a function named numberAndSquare() which takes an array of numbers as argument and
 returns a multidimensional array with all numbers squared.
*/
console.log(`\n Task 03 \n`);

const numberAndSquare = (array) => array.map(x =>[x, x * x]);

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 1, -10]));

/*
Write a function named containsValue() which takes a string array and a string as arguments and returns a boolean value.
 Search the string variable inside of the array and return true if it exists in the array. If it doesn’t exist, return false.
*/
console.log(`\n Task 04 \n`);

function containsValue(array, str) {
    return array.includes(str)
}


console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc") );
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") );

/*
Write a function named reverseSentence() which takes a string as argument and returns the words in reverse order.​
If there is no enough words reverse, return "There is not enough words!".
*/
console.log(`\n Task 05 \n`);

function reverseSentence(string) {
    const words = string.split(' ');
    if(words.length <= 1) return 'There is not enough words!'
    let firstUpperCase = words.reverse().join(' ')
    return firstUpperCase[0].toUpperCase() + firstUpperCase.slice(1).toLowerCase();
}

console.log(reverseSentence('Hello'));
console.log(reverseSentence('Javascript is fun'));
console.log(reverseSentence("This is a sentence"));

/*
Write a function named removeStringSpecialsDigits() which takes a string as argument and
 return a string without the special characters or digits.
*/
console.log(`\n Task 06 \n`)

function removeStringSpecialsDigits(str) {
    let word = '';
    for (const char of str) {
        if((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || (char === ' '));
        word += char
        
    }
    return word;
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));

/*
Write a function named removeArraySpecialsDigits() which takes a string array as argument and
 return back without the special characters or digits.
*/
console.log(`\n Task 07 \n`)

const removeArraySpecialsDigits = (str) => str.map(str => {
    let word = '';
    for (const char of str) {
        if((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || (char === ' '))
        word += char
        
    }
    return word;
})

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits["Automation", "123#$%tool"]);

/*
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.
*/
console.log(`\n Task 08 \n`);

function getCommons(arr1, arr2) {
    let arr3 = [];
    for (const word of arr1) {
        if(arr2.includes(word) && !(arr3.includes(word))) arr3.push(word);
    }
    return arr3;
}
console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ));
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ));

/*
Write a function named noXInVariables() which takes an array as argument and
 return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
*/
const noXInVariables = array =>{
    arr1 = array.map(word =>{
       return (word.toString().split('').filter(letter =>!(letter.toUpperCase() === 'X'))).join('')
    })
    return arr1.filter(word => (word.length > 0))
  }
  
  console.log(noXInVariables(["abc", 123, "#$%"]));
  console.log(noXInVariables(["xyz", 123, "#$%"]));
  console.log(noXInVariables(["x", 123, "#$%"]))
  console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]));


/*
Write a function named fizzBuzz1() which takes a number argument and returns "Fizz"
 if the given number is divisible by 3, "Buzz" if the number is divisible by 5,
  and "FizzBuzz" if the number is divisible by both 3 and 5. Otherwise, it will return the number itself.​
*/

(`\n Task 01 \n`);

function fizzBuzz1(num) {
    if(num % 15 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return num;
}

console.log(fizzBuzz1(0))
console.log(fizzBuzz1(1))
console.log(fizzBuzz1(3))
console.log(fizzBuzz1(5))
console.log(fizzBuzz1(30))
console.log(fizzBuzz1(10))
console.log(fizzBuzz1(15))
console.log(fizzBuzz1(-15))

/*
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. 
However, it will return "Fizz" for the numbers divided by 3, "Buzz" 
for the numbers divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
*/

(`\n Task 02 \n`);

function fizzBuzz2(num) {
    let array = []
    for (let i = 1; i <= num; i++){
        if(i % 15 === 0) array.push('FizzBuzz');
        else if (i % 3 === 0) array.push('Fizz');
        else if (i % 5 === 0) array.push('Buzz');
        else array.push(i);
    }
    return array;
}

console.log(fizzBuzz2(3))
console.log(fizzBuzz2(5))
console.log(fizzBuzz2(10))
console.log(fizzBuzz2(15))
console.log(fizzBuzz2(2))

/*
Write a function named findSumNumbers() which takes a string argument and returns sum of the all numbers appears in the string.
*/
(`\n Task 03 \n`);

function findSumNumbers (string){
    let sum = []
    for (let word of string){
        if ('0123456789'.includes(word)) sum.push(word)
        else sum.push(' ')
    }
    const sum1 = sum.join('').split(' ')
    let num3 = 0
    for ( const num of sum1){
        num3 += Number(num)

    }
    return num3
}


console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));

/*
Write a function named findBiggestNumber() which takes a string argument and returns the biggest number appears in the string.
*/
(`\n Task 04 \n`);

function findBiggestNumber(str) {
    let sum = []
    for (let num of str){
        if ('0123456789'.includes(num)) sum.push(num)
        else sum.push(' ')
    }
    const sum1 = sum.join('').split(' ')
    let num3 = 0
    for ( const x of sum1){
        if(num3 < Number(x)) num3 = x

    }
    return num3
}

console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c  6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));
console.log(findBiggestNumber("3 for 10 dollars"));

/*
Write a function named countOccurrencesOfCharacters() which takes a string argument and returns the count of repeated characters in the String.​
NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
*/
(`\n Task 05 \n`);

function countOccurrencesOfCharacters(string){
    let value = ''
    let result = ''
    for(let i = 0; i <= string.length - 1; i++) {
        let count = 0
    if(!value.includes(string[i])) {
        for(let j = i; j <= string.length - 1; j++) {
            if(string[i] === string[j]) count++ , value = string[j]
            else break;
        }
        result += count + value
    }
}
return result
}

console.log(countOccurrencesOfCharacters(''));
console.log(countOccurrencesOfCharacters('abc'));
console.log(countOccurrencesOfCharacters('abbcca'));
console.log(countOccurrencesOfCharacters('aaAAa'));
console.log(countOccurrencesOfCharacters('www'));

/*
Write a function named fibonacciSeries1() which takes a number n argument and returns the n series of Fibonacci numbers as an array. ​
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/
(`\n Task 06 \n`);

function fibonacciSeries1(num) {
    let fibonacci = [0, 1];
    if(num <= 1) return[0]
    for(let i = 0; i < num -2; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
    }
    return fibonacci[num - 1];
}

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

/*
Write a function named fibonacciSeries2() which takes a number n argument and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/
(`\n Task 07 \n`);

function fibonacciSeries2(num) {
    let fibonacci = [0, 1];
    for(let i = 0; i < num -2; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
    }
    return fibonacci[num - 1];
}

console.log(fibonacciSeries2(2))
console.log(fibonacciSeries2(4))
console.log(fibonacciSeries2(8))
console.log(fibonacciSeries2(9))
console.log(fibonacciSeries2(1))

/*
Write a function named findUniques() which takes two array of number arguments 
and returns the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array.
*/
(`\n Task 08 \n`);

function findUniques(arr1, arr2) {
    const a = arr1.filter((value, index) => arr1.indexOf(value) === index)
    const b = arr2.filter((value, index) => arr2.indexOf(value) === index)
    const uniq = a.concat(b);
    const result = []
    for(const el of uniq){
        if(!a.includes(el) || !b.includes(el)) result.push(el)
    }
    return result;
}
console.log(findUniques([], [1, 2, 3, 2]))
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]))
console.log(findUniques([8, 9], [9, 8, 9]))
console.log(findUniques([-1, -2], [1, 2]))




/*
Write a function named isPowerOf3() which takes a number argument and returns true if given number is equal to 3 power of the X. Otherwise, return false.​
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
*/
console.log('\n Task 09 \n')

function isPowerOf3(number) {
    if(number === 3 || number === 1) return true 
    for(let i = 0; i <= number; i++) {
       number = number / 3
        if(number === 3) return true
        else if(number < 3) return false
    }
    return false
}

console.log(isPowerOf3(1))
console.log(isPowerOf3(2))
console.log(isPowerOf3(3))
console.log(isPowerOf3(27))
console.log(isPowerOf3(100))
console.log(isPowerOf3(81))
console.log(isPowerOf3(9))


/*
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
*/

console.log('\n Task 01 \n')

const calculateTotalPrice1 = (obj) => {
    const product = {
        apple: 2,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25,
    };
    let sum = 0;
    for (const prod in obj) {
        for (const price in product) {
            if (prod === price) sum += obj[prod] * product[price];
        }
    }
    return console.log(sum);
};
calculateTotalPrice1({ apple: 3, mango: 1 });
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }); 
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 });
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 });


console.log('\n Taski 02 \n')

const calculateTotalPrice2 = (obj) => {
    const product = {
        Apple: 2,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25,
    };
    let sum = 0;
    for (const prod in obj) {
        for (const price in product) {
            if (prod === "Apple" && obj[prod] >= 2 && prod === price && prod) {
                if(obj[prod] % 2 === 0) sum += ((obj[prod] * product[price]) / 2) + ((obj[prod] * product[price])/ 2)/2
                else sum += (((obj[prod]+ 1) * product[price])/ 2) + (((obj[prod]-1)* product[price]) / 2)/2
            }
            else if (prod === "Mango" && obj[prod] >= 4 && prod === price && prod) sum += (obj[prod] * product[price]) - (4.99 * Math.floor(obj[prod] / 4))
            else if (prod === price) sum += obj[prod] * product[price];
            
        }
    }
    return console.log(sum);
};
calculateTotalPrice2({ Apple: 3, Mango: 5 });
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 });
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 });
calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 });

console.log('\n Task 03 \n')

const nthWord = (str, number) => {
    if(str.split(' ').length < number) return ''
    return console.log(str.split(" ")[number - 1])
}
nthWord("I like programming languages", 2);
nthWord("QA stands for Quality Assurance", 4)
nthWord("Hello World", 3)
nthWord("Javascript", 1) 
nthWord("", 1) 

console.log('\n Task 04 \n')

const isArmstrong = (num) => {
    const arNum = num.toString().split("");
    let armNum = 0;
    for(let number of arNum) {
        armNum += number ** arNum.length
    }
return console.log(num === armNum);
}
isArmstrong(153) 
isArmstrong(123) 
isArmstrong(1634) 
isArmstrong(153) 
isArmstrong(1111)



console.log('\n Task 05 \n')

const reverseNumber = (...number) => {
    let num = number.join(',')
    let empty = ''
    for (let i = num.length - 1; i >= 0; i--) {
        empty += num[i]
    }
    return empty
}

console.log(reverseNumber(371))
console.log(reverseNumber(123))
console.log(reverseNumber(12))
console.log(reverseNumber(0))
console.log(reverseNumber(111))


    console.log('\n Task 06 \n')

    const doubleOrTriple = (arr, boolean) => {
        if(boolean === true) return arr.map(x => x * 2)
        else return arr.map(x => x * 3)
    }
    console.log(doubleOrTriple([1, 5, 10], true));
    console.log(doubleOrTriple([3, 7, 2], false));
    console.log(doubleOrTriple([-1, -2], true));
    console.log(doubleOrTriple([0], false));
    console.log(doubleOrTriple([-1, 0, 1], true));

    console.log('\n Task 07 \n')

    const splitString = (string, number) => {
        if (string.length % number !== 0) return ''
        else return string.slice(0, number) + ' ' + string.slice(number)
    }
    console.log(splitString("JavaScript", 5))
    console.log(splitString("Java", 2))
    console.log(splitString("Automation", 3))
    console.log(splitString("Hello", 6))
    console.log(splitString("12", 1))


    console.log('/n Task 01 /n')
    /*
    Write a function named countPalindrome() which takes a string and returns the number of  palindrome words.
    Note: A palindrome word is a word that reads the same forwards and backwards. Example: level, radar, deed, refer.
    */
    
    function countPalindrome(string) {
        let words = string.toLowerCase().split(' ')
        let count = 0
            for(const word of words) {
            let reversed =  word.split('').reverse().join('')
            if(word !== '' && word === reversed)
            count ++
         
    }
    return count
    }
    
    console.log(countPalindrome('Mom and Dad'));
    console.log(countPalindrome("See you at noon"));
    console.log(countPalindrome("Kayak races attracts racecar drivers"));
    console.log(countPalindrome(''));
    console.log(countPalindrome("No palindrome here"));
    
    console.log('/n Task 02 /n')
    
    const sum = (arr, boolean) => {
    
        let sumN = 0
        for(const num of arr) {
            if(arr.indexOf(num) % 2 === 0 && boolean === true) sumN += num
            else if (arr.indexOf(num) % 2 !== 0 && boolean === false) sumN += num
        }
        return sumN
    }
    
    console.log(sum([1, 5, 10], true));
    console.log(sum([3, 7, 2, 5, 10]), false);
    console.log(sum([-1, 1, -2, 2], true));
    console.log(sum([0, -1, 15, 1], false));
    console.log(sum([1, 2, 3, 4, -4], true));
    
    
    console.log('/n Task 03 /n'); 
    
    const nthChars = (string, num) => string.split('').filter((value, index) => index % num === num - 1).join('')
        
    
    
    console.log(nthChars("Java", 2))
    console.log(nthChars("JavaScript", 5))
    console.log(nthChars("Java", 3))
    console.log(nthChars("Hi", 4))
    console.log(nthChars("0123456789", 2))
    
    console.log('/n Task 04 /n')
    const canFormString = (str1,str2) => {
        let arr1 = str1.split('')
        let arr2 = str2.split('').filter(x => x != ' ')
        let empty = []
        for (let i = 0; i < arr2.length; i++){
            if (arr1.includes(arr2[i]) && !empty.includes(arr1[i])) empty.push(arr2[i])
        }
        return empty
    }
    
    console.log(canFormString("Hello", "Hi"))
    console.log(canFormString("programming", "gaming"))
    console.log(canFormString("halogen", "hello"))
    console.log(canFormString("CONVERSATION", "voices rant on"))
    console.log(canFormString("12", "123"))
    /*
5
Requirement:
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
isAnagram("Apple", "Peach")   -> false
isAnagram("listen", "silent")   -> true
isAnagram("astronomer", "moon starer")   -> true
isAnagram("CINEMA", "iceman")   -> true
isAnagram("123", "1234")  -> false
*/

function isAnagram(str1, str2) {

    str1 = str1.toLowerCase().split(' ').filter(x => !(' '.includes(x))).join('')
    str2 = str2.toLowerCase().split(' ').filter(x => !(' '.includes(x))).join('')
    if (str1.length !== str2.length) {
        return false
    }
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')

    return str1 === str2
}

console.log(isAnagram("Apple", "Peach"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("astronomer", "moon starer"));
console.log(isAnagram("CINEMA", "iceman"));
console.log(isAnagram("123", "1234"));


/*
6
Requirement:
Write a function named count() which takes an array of numbers and a 
boolean value as arguments. It will return the total count of the even numbers if 
the boolean value is true. And return the total count of the odd numbers if the 
boolean value is false. 
Examples:
count([1, 5, 10], true)  -> 1
count([3, 7, 2, 5, 10], false)  -> 3
count([-1, 1, -2, 2], true)  -> 2
count([0, -1, 15, 1], false)  -> 3
count([1, 2, 3, 4, -4], true)  -> 3
*/


const count = (array, boolean) => {
    let counter = 0;
    for (const el of array) {
        if (el % 2 === 0 && boolean === true) counter++
        else if (el % 2 !== 0 && boolean === false)
            counter++;
    }
    return counter;
}

console.log(count([1, 5, 10], true))
console.log(count([3, 7, 2, 5, 10], false))
console.log(count([-1, 1, -2, 2], true))
console.log(count([0, -1, 15, 1], false))
console.log(count([1, 2, 3, 4, -4], true))

/*
7
Requirement:
Write a function named sumDigitsDouble() which takes a string and returns 
the sum of the digits in the given String multiplied by 2. Return -1 if the given 
string does not have any digits. Ignore negative numbers.
Examples:
sumDigitsDouble("Javascript")  -> -1
sumDigitsDouble("23abc45")   -> 28
sumDigitsDouble("Hi-23")  -> 10
sumDigitsDouble("ab12")  -> 6
sumDigitsDouble("n0numh3r3")  -> 12
*/

function sumDigitsDouble(string) {
    let sum = 0
    for (let number of string) {
        if (Number(number)) sum += Number(number) * 2
    }
    if (sum === 0)
        return -1
    else return sum

}

console.log(sumDigitsDouble("Javascript"));
console.log(sumDigitsDouble("23abc45"));
console.log(sumDigitsDouble("Hi-23"));
console.log(sumDigitsDouble("ab12"));
console.log(sumDigitsDouble("n0numh3r3"));


/*
8
Requirement:
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.
Examples:
countOccurrence("Javascript", "Java")  -> 1
countOccurrence("Hello", "World")  -> 0
countOccurrence("Can I can a can", "anc")   -> 3
countOccurrence("Hello", "l")   -> 2
countOccurrence("IT conversations", "IT")   -> 2
*/


const countOccurrence = (str1,str2) => {
    let count = 0
    let arr = str2.toLowerCase().split('').sort().join('')
    for (let i = 0; i < arr.length;i++){
    if (str1.toLowerCase().includes(arr[i]))
    count ++
    }
    return count
}

console.log(countOccurrence("Javascript", "Java"))
console.log(countOccurrence("Hello", "World"))
console.log(countOccurrence("Can I can a can", "anc"))
console.log(countOccurrence("Hello", "l"))
console.log(countOccurrence("IT conversations", "IT"))


console.log('\n Task 01 \n')

function makeNegative (num) {
    if(num > 0) return 0 - num
    else return num
}

console.log(makeNegative(10))
console.log(makeNegative(-7))
console.log(makeNegative(0))
console.log(makeNegative(0.45))


console.log('\n Task 02 \n')

const isSumEvenOrOdd = (n1, n2, n3) => {
    if((n1 + n2 + n3) % 2 === 0) return 'even'
    else  return 'odd'
}

console.log(isSumEvenOrOdd(0, 1, 4))
console.log(isSumEvenOrOdd(0, -1, -5))
console.log(isSumEvenOrOdd(0, 0, 0))
console.log(isSumEvenOrOdd(7, 1, 9))
console.log(isSumEvenOrOdd(1, 1, 1))

console.log('\n Task 03 \n')

const decimal2 = array => array.map(num => Number(num.toFixed(2)))

console.log(decimal2([94.356, 8.9752]))
console.log(decimal2([76.62, 128.4, 84]))
console.log(decimal2([20987, 3.53245, 12.345, 32.9]))
console.log(decimal2([]))
console.log(decimal2([4.35623, 8.9742]))

console.log('\n Task 04 \n')

const myPow = (x, n) => {
    if(x === 0 || n === 0) return 1
    else return x ** n
}

console.log(myPow(3, 3))
console.log(myPow(10, 1))
console.log(myPow(100, 0))
console.log(myPow(1, 1))
console.log(myPow(4, 2))
console.log(myPow(0, 0))
console.log(myPow(5, 3))

console.log('\n Task 05 \n')

const findLongestWord = string => string.split(' ').sort((a, b) => b.length - a.length)[0]

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
console.log(findLongestWord('This is a sample string for testing'))
console.log(findLongestWord('One two ten'))
console.log(findLongestWord(''))
console.log(findLongestWord('   '))


console.log("\n Task 01 \n")
/*
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
 Examples:
countVC("Hello")​             		-> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​             	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​           	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0}
*/

const countVC = string => {
    countVo = 0
    countC = 0
    for(const str of string.toLowerCase()) {
        if ((str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) && 'aeoui'.includes(str))
        countVo++
    else if ((str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) && !'aeoui'.includes(str))
    countC++
    
}
return `{vowels:${countVo}, consonants:${countC}}`
}
console.log(countVC("Hello"))
console.log(countVC("Programming"))
console.log(countVC("123Abc"))
console.log(countVC("123!@#xyz"))
console.log(countVC(""))


console.log('\n Task 02 \n')
/*
Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category
 Examples:
countChars("Hello")​                         	-> {letters: 5}
countChars("Programming 123")​ 	-> {letters: 11, numbers: 3}
countChars("123AbC!@#")​             	-> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​             	-> {numbers: 10}
countChars("     ")​                                	-> {}
countChars("")​                                     	-> {}
*/

const countChars = string => {
    
     let result = {
        countL: 0,
        countN: 0,
        countS: 0
    }
    
    for(const str of string.toLowerCase()){
        if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122)
       result.countL++
    else if ('0123456789'.includes(str))
        result.countN++

    else if (str !== ' ')
    result.countS++
}
return result
}

console.log(countChars('Hello'))
console.log(countChars('Programming 123'))
console.log(countChars('123AbC!@#'))
console.log(countChars('0987654321'))
console.log(countChars('     '))
console.log(countChars(''))


console.log('\n Task 03 \n')
/*
Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
Examples:
maxOccurrences("Hello")             -> "l"
maxOccurrences("Occurrences")  -> "c"
maxOccurrences("    ab    ")      -> "al"
maxOccurrences("12   3   21")    -> "1"
maxOccurrences("      ")      -> ""
maxOccurrences("")    -> ""
*/




console.log(maxOccurrences("Hello"))
console.log(maxOccurrences(""))
console.log(maxOccurrences("Occurrences"))
console.log(maxOccurrences("    ab    "))
console.log(maxOccurrences("12   3   21"))
console.log(maxOccurrences("      "))
console.log(maxOccurrences(""))




console.log('\n Task 04 \n')

/*
Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd")  -> "ad"
starOut("ab**cd")  -> "ad"
starOut("xm*sm*sy")  -> "xy"
starOut("abc")     -> "abc"
starOut("***")    -> ""
starOut("   ")      -> "   "
starOut("")    -> ""
*/

const starOut = string => {
    for (const el of string.split(' ')) {
        if (el.includes('*'))
            return el.replaceAll('*', '').slice(0, 1) + el.replaceAll('*', '').slice(-1)

    }
    return string
}
console.log(starOut("ab*cd"))
console.log(starOut("ab**cd"))
console.log(starOut("xm*sm*sy"))
console.log(starOut("abc"))
console.log(starOut("***"))
console.log(starOut("   "))
console.log(starOut(""))


console.log('\n Task 05 \n')

/*

Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. A roman 
numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I")  -> 1
romanToInt("IV")  -> 4
romanToInt("CXII")  -> 112
romanToInt("MMM")  -> 3000
romanToInt("MMMDCCCLXXXVIII")   -> 3888
romanToInt("MDCLXVI")    -> 1666
*/

const romanToInt = (string) => {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let num = 0;
    for (let i = 0; i < string.length; i++) {
        const curr = roman[string[i]]
        const next = roman[string[i + 1]]
        if ((curr < next))
            (num -= curr)
        else if (num += curr);
    }
    return num
}

console.log(romanToInt("I"));
console.log(romanToInt("IV"));
console.log(romanToInt("CXII"));
console.log(romanToInt("MMM"));
console.log(romanToInt("MMMDCCCLXXXVIII"));
console.log(romanToInt("MDCLXVI"));
console.log(romanToInt("IX"));
console.log(romanToInt("IXX"));

console.log("\n Task 01 \n")
/*
Write a function named repeatingX() which takes a string argument and returns true if the letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
Examples:
repeatingX("xTechxGlobalx") 	-> false
repeatingX("Hello Xx World") 	-> true
repeatingX("x x") 		-> false
repeatingX("") 		-> false
repeatingX("xxxxx") 		-> true
*/

const repeatingX = (str) => {
    for(let i = 0; i< str.length; i++){
        if(str[i] === str[i + 1]) return true
    }
    return false
}

console.log(repeatingX('xTechxGlobalx'))
console.log(repeatingX('Hello Xx World'))
console.log(repeatingX('x x'))
console.log(repeatingX(''))
console.log(repeatingX('xxxxxx'))

console.log('\n Task 02 \n')

/*
Write a function named isPerfectSquare() which takes a number as an argument and checks if it is a perfect square. It returns true if the number is a perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an integer by itself or as the second exponent of an integer. For example, 25 is a perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. However, 21 is not a perfect square number because it cannot be expressed as the product of two same integers.
Examples:
isPerfectSquare(25) 	-> true
isPerfectSquare(24) 	-> false
isPerfectSquare(0) 	-> true
isPerfectSquare(1) 	-> true
isPerfectSquare(-1) 	-> false
isPerfectSquare(144) 	-> true
*/

const isPerfectSquare = (num) => {
    const number = Math.floor(Math.sqrt(num))
    return number * number === num
}

console.log(isPerfectSquare(25))
console.log(isPerfectSquare(24))
console.log(isPerfectSquare(0))
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(-1))
console.log(isPerfectSquare(144))

console.log('\n Task 04 \n');
/*
Write a function named convertTemperature() which takes a number and a string arguments to be considered as a temperature value and a unit (either Celsius or Fahrenheit) as arguments and converts the temperature to the other unit.
NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
*/

const convertTemperature = (num, str) => {
    if(str === 'Celsius') return (num * 9/5) + 32
    else if(str === 'Fahrenheit') return (num - 32) * 5/9
}

console.log(convertTemperature(100, 'Celsius'))
console.log(convertTemperature(32, 'Fahrenheit'))
console.log(convertTemperature(0, 'Celsius'))
console.log(convertTemperature(212, 'Fahrenheit'))
console.log(convertTemperature(-40, 'Celsius'))
console.log(convertTemperature(-40, 'Fahrenheit'))

console.log('\n Task 04 \n')
//Write a function named sumOfEvenNumbers() which takes an array as an argument and returns the sum of all the even numbers in an array.

const sumOfEvenNumbers = (number) => number.reduce((sum, num) => num % 2 === 0 ? sum + num : sum,  0)

console.log(sumOfEvenNumbers([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]))
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]))
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]))
console.log(sumOfEvenNumbers([]))
console.log(sumOfEvenNumbers([1,2,3,4,5]))
console.log(sumOfEvenNumbers([10, 20, 30, 40, 50]))

console.log('\n Task 05 \n')
/*
Write a function named capsOdds() which takes an array argument and returns the array with all
 the odd index elements capitalized (converted to uppercase).
*/

const capsOdds = (arr) => arr.map(x => arr.indexOf(x) % 2 !== 0 ? x.toUpperCase() : x)

console.log(capsOdds(["Hello", "World"]))
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]))
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]))
console.log(capsOdds([]))
console.log(capsOdds(["John !@#$%", "^&*() Doe"]))

console.log('\n Task 01 \n')

/*
Write a function named toCamelCase() which takes a string as its argument and returns a new string in camelCase. Assume the string only contains letters and spaces
Examples:
toCamelCase("first name") 	->"firstName"
toCamelCase("last     name") 	->"lastName"
toCamelCase("   ZIP CODE") 	->"zipCode"
toCamelCase(“I Learn Java Script”)   	-> "iLearnJavaScript"
toCamelCase(“helloWorld”)   ​	-> “helloWorld”
*/
const toCamelCase = (str) => {
  if(!str.includes(' ')) return str
  let string = str.trim()
  arr = ''
  for(const el of string.split(' ')) {
    if(string.indexOf(el) === 0) {arr += el.toLowerCase()}
    else if(string.indexOf(el) !== 0) {`${arr += el[0].toUpperCase() + el.slice(1).toLowerCase()}`}
  }
  return arr
}


console.log(toCamelCase("first name"))
console.log(toCamelCase("last    name"))
console.log(toCamelCase("   ZIP CODE"))
console.log(toCamelCase("I Learn Java Script"))
console.log(toCamelCase("helloWorld"))




console.log('\n Task 02 \n')
/*
Write a function named toSnakeCase() which takes a string as its argument and returns a new string in snake_case. Assume the string only contains letters and spaces
NOTE: In snake case words are separated by underscores (_) and are all lowercase.
Examples:
toSnakeCase("first name") 	->"first_name"
toSnakeCase("last    name") 	->"last_name"
toSnakeCase("    I love Java Script") 	->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")   		​-> "hello"
*/
const toSnakeCase = str => {
    let string = str.split(' ')
    arr = []
    for(const el of string){
        if(el.length >= 1)
        arr.push(el.toLowerCase())
    }
    return arr.join('_')
}



console.log(toSnakeCase("first name"))
console.log(toSnakeCase("last    name"))
console.log(toSnakeCase("    I love Java Script"))
console.log(toSnakeCase("already_snake_case"))
console.log(toSnakeCase("hello"))




console.log('\n Task 03 \n')
/*
Write a function named alternatingCases() which takes a string argument and returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are ignored.
Examples:
alternatingCases("Hello") 	-> "HeLlO"
alternatingCases("basketball") 	-> "BaSkEtBaLl"
alternatingCases("Tech Global") 	-> "TeCh GlObAl"
alternatingCases("") 		-> ""
alternatingCases("123!@#aB") 	-> "123!@#Ab"
*/
const alternatingCases = (string) => {
    let str = string.split('')
    arr = []

    for(let i = 0; i < str.length; i++ ) {
        if(i % 2 === 0) arr.push(str[i].toUpperCase())
    else arr.push(str[i].toLowerCase())
    }
    return arr.join('')
}

console.log(alternatingCases('Hello'))
console.log(alternatingCases('basketball'))
console.log(alternatingCases('Tech Global'))
console.log(alternatingCases(''))
console.log(alternatingCases('123!@#aB'))




console.log('\n Task 04 \n')
/*
Write a function named isNeutral() that takes two strings comprised of + and -, and return a new string which shows how the two strings interact in the following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")     		->  "0"
isNeutral("-+", "-+") 		->   "-+"
isNeutral("-++-", "-+-+")           	->  "-+00"
isNeutral("--++--", "++--++")     	->  "000000"
isNeutral("+++", "+++")          	 ->  "+++"
*/
const isNeutral = (str1, str2) => {
 let neutral = ''
 for(let i = 0; i < str1.length; i++){
    if(str1[i] === str2[i]) neutral += str1[i]
    else neutral += '0'
 }
 return neutral
}

console.log(isNeutral("-", "+"))
console.log(isNeutral("-+", "-+"))
console.log(isNeutral("-++-", "-+-+"))
console.log(isNeutral("--++--", "++--++"))
console.log(isNeutral("+++", "+++"))





console.log('\n Task 05 \n')
/*
Write a function named isTrueOrFalse() which takes a string with sets of character/words separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit") 	-> true
isTrueOrFalse("Xylophones can obtain Xenon.")   		->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK") 	-> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe") 	-> true
isTrueOrFalse("Got stuck in the Traffic") 		-> false
*/
const isTrueOrFalse = string =>{
let pos = 0
let neg = 0
let str = string.split(' ')
for(let el of str){
    const char = el[0].toUpperCase()
    if(char >= 'A' && el <='M') pos++ 
    else if(char >= 'N' && el <= 'Z') neg++
}
return pos > neg
}

console.log(isTrueOrFalse('A big brown fox caught a bad rabbit'))
console.log(isTrueOrFalse('Xylophones can obtain Xenon.'))
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"))
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"))
console.log(isTrueOrFalse("Got stuck in the Traffic"))

console.log('\n TASK 01 \n')

/*
Write a function named toInitials() which takes a string argument considered to be full name and returns initials of the given full name.
*/

const toInitials = (string) => {
    let initial = ''
    for(const str of string.split(' ')) {
        if(string.indexOf(str) === 0) initial += `${str[0]}. `
        else if (string.indexOf(str) !== 0) initial += `${str[0]}.`
    }
    
    return initial
}

console.log(toInitials( "Joe Doe"))
console.log(toInitials( "Alex Reyes"))
console.log(toInitials( "Tom Cruise"))
console.log(toInitials( "Bruce Willis"))
console.log(toInitials( "Ja Le"))

console.log('\n TASK 02\n')
/*
Write a function named hasNumbers() which takes a string argument and returns true if there is a number and false if there isn’t. 
*/

const hasNumbers = (str) => str.split('').some(x => '12345678'.includes(x))

console.log(hasNumbers(""))
console.log(hasNumbers("John is 34 years old"))
console.log(hasNumbers("Hello 3"))
console.log(hasNumbers("125$"))
console.log(hasNumbers("  a  "))
console.log(hasNumbers("    "))
console.log(hasNumbers("!@#$%^&*()_+"))

console.log('\n TASK 03\n')
/*
Write a function named elementLength() which takes an array argument and returns the length of each element as a separate array.
*/

const elementLength = (array) => array.map(x => x.length)

console.log(elementLength( [ "Hello", "World" ] ))
console.log(elementLength( [ "Apple", "Banana", "Orange", "Pear" ]))
console.log(elementLength( ["BMW", "Mercedes", "Audi" ]))
console.log(elementLength( []))
console.log(elementLength( [ "Trampoline", "", "Tennis", "Basketball" ]))


console.log('\n TASK 04\n')
/*
Write a function named isArraySumEvenOrOdd() which takes an array of numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
*/

const isArraySumEvenOrOdd = (arr) => arr.reduce((arr, curr) => (arr + curr), 0) % 2 === 0 ? 'even' : 'odd'

console.log(isArraySumEvenOrOdd([]))
console.log(isArraySumEvenOrOdd( [ 0, -1, -5 ] ))
console.log(isArraySumEvenOrOdd( [ 7, 1, 8, 1 ] ))
console.log(isArraySumEvenOrOdd( [ 0, 0 ] ))
console.log(isArraySumEvenOrOdd( [ 1, 1, 1, 1, 1]))

console.log(`\n TASK 05\n`)
//Write a function named reverse() which takes a string argument and returns the given string reversed.

const reverse = (str) => str.split('').reverse().join('')

console.log(reverse("Hello World"))
console.log(reverse("TechGlobal"))
console.log(reverse("Basketball"))
console.log(reverse(""))
console.log(reverse("Apples 456"))

console.log(`\n TASK 06 \n`)
/*
Write a function named reverseWords() which takes a string argument and returns a string with each word 
within that string reversed but still in the same order as the initial string. 
*/

const reverseWords = (str) => str.split(' ').map(x => x.split('').reverse().join('')).join(' ')

console.log(reverseWords("Hello World"))
console.log(reverseWords("TechGlobal"))
console.log(reverseWords("Basketball"))
console.log(reverseWords(""))
console.log(reverseWords("Apples 456"))

console.log('\n Task 01 \n')
/*
Write a function named findMedian() which takes two arrays of numbers as its arguments and return the median of the two sorted arrays. 

NOTE: The median is the middle number of a sorted array. So the median of [1,3], [2] would be 2. If the array has an even length, you are to find the average of the 2 middle numbers
findMedian([1, 3], [2]) 		-> 2
findMedian([1, 2], [3, 4]) 		-> 2.5
findMedian([4], [3]) 		-> 3.5
findMedian([4], [])  		-> 4
findMedian([0], [0,1])  		​-> 0
*/

const findMedian = (arr1, arr2) => {
    const arr3 = [...arr1, ...arr2].sort((x, y) => (x - y))
    let middle = Math.floor(arr3.length / 2)
    // console.log(middle)

    if(arr3.length % 2 === 0) return (arr3[middle - 1] + arr3[middle]) /2 
    else return arr3[middle]
    //if (arr3.length % 2 !== 0) return arr3[Math.floor(arr3.length / 2)]
    
}

console.log(findMedian([1, 3], [2]))
console.log(findMedian([1, 2], [3, 4]))
console.log(findMedian([4], [3]))
console.log(findMedian([4], []))
console.log(findMedian([0], [0 , 1]))

console.log('\n Task 01 \n')

/*
Write a function named calculateFactorial() which takes a number as an argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.
calculateFactorial(0) 	-> 1
calculateFactorial(1) 	-> 1
calculateFactorial(5) 	-> 120
calculateFactorial(6) 	-> 720
calculateFactorial(10) 	-> 3628800
calculateFactorial(4) 	-> 24
*/

const calculateFactorial = number => {
    let factorial = 1
    for(let i = 1; i <= number; i++) {
        factorial *= i
    }
    return factorial
}

console.log(calculateFactorial(0))
console.log(calculateFactorial(1))
console.log(calculateFactorial(5))
console.log(calculateFactorial(6))
console.log(calculateFactorial(10))
console.log(calculateFactorial(4))

console.log('\n Task 03 \n')

/*
Write a function named calculateGCD() which takes two numbers as arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that divides two or more integers without leaving a remainder. In other words, it is the largest number that is a common factor of two or more numbers.
Examples:
calculateGCD(8, 12) 	-> 4
calculateGCD(17, 5) 	-> 1
calculateGCD(48, 18) 	-> 6
calculateGCD(0, 5) 	-> 5
calculateGCD(21, 14) 	-> 7
calculateGCD(60, 48) 	-> 12
*/

const calculateGCD = (num1, num2) => {
    let num = Math.max(num1, num2)
    for(let i = num; i > 0; i--){
        if(num1 % i === 0 && num2 % i === 0) {
            return i
        }
    }
}

console.log(calculateGCD(8, 12))
console.log(calculateGCD(17, 5))
console.log(calculateGCD(48, 18))
console.log(calculateGCD(0, 5))
console.log(calculateGCD(21, 14))
console.log(calculateGCD(60, 48))

console.log('\n Task 04 \n')

/*
Write a function named calculateGCD() which takes two numbers as arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that divides two or more integers without leaving a remainder. In other words, it is the largest number that is a common factor of two or more numbers.
Examples:
calculateGCD(8, 12) 	-> 4
calculateGCD(17, 5) 	-> 1
calculateGCD(48, 18) 	-> 6
calculateGCD(0, 5) 	-> 5
calculateGCD(21, 14) 	-> 7
calculateGCD(60, 48) 	-> 12
*/

const calculateLCM = (num1, num2) => {
    let num = Math.max(num1, num2)
    for(let i = num; i > 0; i--){
        if(num1 % i === 0 && num2 % i === 0) {
            return (num1 * num2) / i
        }
    }
}

console.log(calculateLCM(8, 12))
console.log(calculateLCM(17, 5))
console.log(calculateLCM(48, 18))
console.log(calculateLCM(0, 5))
console.log(calculateLCM(21, 14))
console.log(calculateLCM(60, 48))