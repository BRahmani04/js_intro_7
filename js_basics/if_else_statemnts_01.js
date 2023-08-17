
/* 
Generate a random number between 0 and 1 (both inclusive);
Print "The number is Zero if the generated number is zero"
Print "The number is ONE if the generated number is one"
*/ 

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let num = getRandomNumber(1, 10);

if (num === 0) {
    console.log("The number is ZERO");
}
else {
    console.log("The number is ONE");
}

// #2
/*
Generate a random number between 1 and 10 (both inclusive);
Print "The number is EVEN if the generated number is even"
Print "The number is ODD if the generated number is ODD"
*/
function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let num2 = getRandomNumber(1, 10);
console.log("THe number is = " + num2);
if (num2 % 2 === 0) {
    console.log("The number is EVEN");
}
else {
    console.log("The number is ODD");
}

// #3

/*
Generate a random number between -2 and 2 (both inclusive);
Print "The number is POSITIVE if the generated number is positive"
Print "The number is NEGATIVE if the generated number is negative"
Print "The number is ZERO if the generated number is zero"
*/
function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let num3 = getRandomNumber(-2, 2);
console.log(num3);

if (num3 > 0) {
    console.log("The number is POSITIVE");
}
else if(num3 < 0) {
    console.log("The number is NEGATIVE");
}
else {
    console.log("The number is ZERO");
}


if ("") {
    console.log("HELLO");
}
else {
    console.log("HOLA!");
}


// WAY-2

if(randomDay === 6) {
    console.log("VACATION");
    console.log("GREEN");
}
else if(randomDay === 0) {
    console.log("VACATION");
    console.log("RED");
}
else {
    console.log("WORK");
    console.log("BLACK");
}


// WAY-3
if(randomDay === 0 || randomDay === 6) {
    console.log("VACATION");
    // GREEN or RED
    if(randomDay === 6){
        console.log("GREEN");
    }
    else {
        console.log("RED");
    }
}
else {
    console.log("WORK");
    console.log("BLACK");
}


// WAY-4
if(randomDay > 0 && randomDay < 6){
    console.log("WORK");
    console.log("BLACK");
}
else{
    console.log("VACATION");
    // GREEN or RED
    if(randomDay === 6){
        console.log("GREEN");
    }
    else {
        console.log("RED");
    }
}

