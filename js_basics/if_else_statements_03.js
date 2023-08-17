//TASK 01
let name = "John";

if (name[0] === "j" || name [0] === "J") {
    console.log("PARTY");
}
else {
    console.log("SORRY");
}

// OR

let name1 = "John";

if (name1.toLowerCase() [0] === "j") {
    console.log("PARTY");
}
else {
    console.log("SORRY");
}

// TASK 02
function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start +1)) + start;
}

let num1 = getRandomNumber(-3, 3);
console.log(num1);

if(num % 2 === 0) {
    console.log("EVEN");
    if(num > 0){
        console.log("POS");
    }
    else if(num < 0){
        console.log("NEG");
    }
    else {
        console.log("ZERO");
    }
}
else {
    console.log("ODD");
    if(num > 0){
        console.log("POS");
    }
    else if(num < 0){
        console.log("NEG");
    }
    else {
        console.log("ZERO");
    }
}
 
// OR

if (num1 % 2 === 0) {
    console.log("EVEN");
} 
else {
    console.log("ODD")
}

if (num1 > 3) {
    console.log("POSITIVE");
}
else if (num1 < 0) {
    console.log("NEGATIVE");
}
else {
    console.log("ZERO");
}

// Write a function it takes an argument as an age 
// and returns if the age is more than 13
// returns false if the age is les than 16

function checkDLAage(age) {
    if (age > 15) return true;
    return false;
} 
console.log(checkDLAage(10)); // false
console.log(checkDLAage(15)); // false
console.log(checkDLAage(16)); // true

/* 
Retirement age = 65
if the age is more then or equal 65 -> you can be retired
of the age is less then 65;
    64 -> you have one year left to get retired
    55 -> you have 10 years to get reired
*/

let age = 62;
let retirement = 65;

if (age >= retirement) {
    console.log("You can be retired");
}
else if(age === 64) {
    console.log(`You have 1 year left to get retire`);
}
else {
    console.log(`You have ${retirement - age} years left to get retired`);
}

// ------OR------

let age = 65;

if(age >= 65) console.log("You can be retired!");
else{
    if(age === 64) console.log("You have 1 year left to get retired!");
    else console.log(`You have ${65 - age} years left to get retired!`);
}


if(age < 65){
    if(age === 64) console.log("You have 1 year left to get retired!");
    else console.log(`You have ${65 - age} years left to get retired!`);
}
else console.log("You can be retired!");



if(age >= 65) console.log("You can be retired!");
else if(age === 64) console.log("You have 1 year left to get retired!");
else console.log(`You have ${65 - age} years left to get retired!`);