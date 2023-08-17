
/* 
Write a code that generates a random number between 0 and 6(both inclusive)
0 Represents Sunday
1 Represents Monday



6 represents Saturday

Print "WEEKEND" if the number is 0 or 6
Print "WEEKDAY" if the number is either 1, 2, 3, 4, or 5
*/

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let num1 = getRandomNumber(0, 6)
console.log(num1);

if (num1 === 0) {
    console.log("WEEKEND");
}
else if(num1 === 6) {
    console.log("WEEKEND");
}
else {
    console.log("WEEKDAY");
}

// OR

let day = getRandomNumber(0, 6);
console.log(day);

if (day === 0 || day ===6) {
    console.log("WEEKEND");
}
else {
    console.log("WEEKDAY");
}

/* 
even ->2 * points
divided 10 -> 3 * points
7 -> multiply by 7 

divisibble 10 -> multiply with 6
even  -< multiply with 2
7 -> 7
*/

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let number1 = getRandomNumber(1, 100);
let point = 1
console.log(number1);

if (number1 % 10 === 0) {
    console.log(point * 6);
}
else if(number1 % 2 === 0) {
    console.log(point * 2);
}
else if(number1 === 7) {
    console.log(point *7);
}
else {
    console.log(point);
}

/*
Write a code that generates a random number between 0 and 6 (both inclusive)
0 represents Sunday
1 represents Monday
.
.
.
.
6 represents Saturday
0 -> print RED
6 -> print GREEN
1,2,3,4,5 -> print BLACK
If it is weekend -> "VACATION"
if it is weekday -> "WORK"
0 -> RED\nVACATION
6 -> GREEN\nVACATION
1,2,3,4,5 -> BLACK\nWORK
*/

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let randomDay = getRandomNumber(0, 6)

console.log(randomDay);

if (randomDay === 0 || randomDay === 6) {
    console.log("VACATION");
}
else {
    console.log("WORK");
}


if (randomDay === 0) {
    console.log("RED");
}
else if(randomDay === 6) {
    console.log("GREEN");
}
else {
    console.log("BLACK");
}
// Way -2







function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start +1)) + start;
}

let num10 = getRandomNumber(0, 6);
console.log(num10);

if (num10 === 0) {
    console.log("RED");
    console.log("VACATION");
}
else if (num10 === 6) {
    console.log("GREEN");
    console.log("VACATION");
}
else {
    console.log("BLACK");
    console.log("WORK");
}


function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start +1)) + start;
}

let num3 = getRandomNumber(0, 6);

console.log(num3);

if (num3 === 0 || num3 === 6) {
    if (num3 === 0) {
        console.log("RED\nVACATION");
    }
        else {
            console.log("GREEN\nVACATION");
        }
    }
    else {
        console.log("BLACK\nWORK");
    }
