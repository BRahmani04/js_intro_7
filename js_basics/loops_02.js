/* Write a program that generates a random number between 10 and 20 (both inclusive)
And it outputs all the odd numbers starting from 1 to random number (both inclusive)
*/
let num = Math.floor(Math.random() * 11) + 10;

for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) console.log(i);
}

// print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascendin order

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
console.log(num1, num2);
for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    console.log(i);
}

//Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l

let school = "TechGlobal School";
for (let i = 0; i <= school.length-1; i++) {
    console.log(school[i]);
}

//Count the total occurrences of letter o in TechGlobal School  -> 3

let school = "TechGlobal School";
let count = 0;
for (let i = 0; i <= school.length-1; i++) {
    if (school[i].toLowerCase() === "o") count++;
}

console.log(count);
