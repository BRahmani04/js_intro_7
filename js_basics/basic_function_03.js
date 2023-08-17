
/*

Write a function that takes argument isPositive and returns true if the arg is positive and false otherwise.

isPositive(5) - true
isPositive(0) - false
isPositive(-5) - false
isPositive(15) - true

*/

function isPositive(arg){

    return arg > 0;

}
console.log(isPositive(5));// true
console.log(isPositive(0)); // false
console.log(isPositive(-5));// false
console.log(isPositive(15));// true

// Write a function that takes argument isNegative and returns true if the arg is positive and false otherwise.

function isNegative(a){
    return a < 0;
}

console.log(isNegative(5));
console.log(isNegative(-3));

// Write a function called getFirstChar that takes an argument and returns the first Character from the arguments.

function getFirstChar(a){
   return a[0]
}

getFirstChar("Hello");
console.log(getFirstChar("Hello")); // H
console.log(getFirstChar("")); // undefinded

// Write a function called getFirstLastChar that takes an argument and returns the first Character from the arguments.

function getFIrstLastChar(b){
    return b[0] + b[b.length-1];
}

getFIrstLastChar("Hello");
console.log(getFIrstLastChar("Hello")); // Ho
console.log(getFIrstLastChar("")); // NaN
console.log(getFIrstLastChar("a")); //"aa"

// Write a function called getRandomNumber that takes 2 args and returns a random number between them (both inclusive)

getRandomNumber(5, 10); 
getRandomNumber(15, 17);
getRandomNumber(5, 10);
getRandomNumber(5, 10);

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1) + start)
}

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(50, 100));
console.log(getRandomNumber(3, 5));
console.log(getRandomNumber(0, 1));


function getRandomNumber(start, end){
    return Math.ceil(Math.random() * (end - start) - start);
}

console.log(getRandomNumber(0, 10));
console.log(getRandomNumber(0, 10));
console.log(getRandomNumber(0, 10));
console.log(getRandomNumber(0, 10));
console.log(getRandomNumber(0, 10));
console.log(getRandomNumber(0, 10));
console.log(getRandomNumber(0, 10));


// Write a function called average5 that takes 5 arguments and returns 

function average5(a, b, c, d, e){
    return (a + b + c + d + e) / 5;
}

console.log(average5(1, 2, 3, 4, 5));

// TRICKY PART

console.log(average5("1", "2", "3", "4", "5")); // 2469
console.log(average5("1", 2, 3, 4, 5)); //2469
console.log(average5(1, 2, 3, 4, "5")); // 21
