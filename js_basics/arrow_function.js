
// Write a function called product which takes 2 numbers and returns their product
// 1
function product1(x, y) {
    return x * y
}

console.log(product1(3, 5));
console.log(product1(2, 0));
console.log(product1(4, 3));

// 2

const product2 = function (x, y) {
    return x * y
}

console.log(product2(3, 5));
console.log(product2(2, 0));
console.log(product2(4, 3));

// 3

const product3 = (x, y) => x * y

console.log(product3(3, 5));
console.log(product3(2, 0));
console.log(product3(4, 3));



/*
Write a function named as fizzBuzz that takes one number argument and
Outputs 'Fizz' if the number is divisible by 3
Outputs 'Buzz' if the number is divisible by 5
Outputs 'FizzBuzz' if the number is divisible by both 3 and 5
Outputs the number itself if it is not divisible by both 3 and 5
*/


function fizzBuzz(x) {
    if (x % 3 === 0 && x % 5 === 0) return ("FizzBuzz")
    else if (x % 3 === 0) return ("Fizz");
    else if (x % 5 === 0) return("BUzz");
    else return x
}

console.log(fizzBuzz(3));


const fizzBuzz = function(x) {
    if (x % 3 === 0 && x % 5 === 0) console.log("FizzBuzz")
    else if (x % 3 === 0) console.log("Fizz");
    else if (x % 5 === 0) console.log("BUzz");
    else console.log(x)
}

fizzBuzz(10);



const fizzBuzz = (x) => {
    if (x % 3 === 0 && x % 5 === 0) console.log("FizzBuzz")
    else if (x % 3 === 0) console.log("Fizz");
    else if (x % 5 === 0) console.log("BUzz");
    else console.log(x)
}

fizzBuzz(45);


function greeting1() {
    console.log('Hello');
}
greeting1(); // Hello


const greeting2 = function () {
    console.log('Hello');
}
greeting2();

const greeting3 = () => console.log('Hello');

greeting3();