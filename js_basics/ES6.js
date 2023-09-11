// LET and COnst


let fname = 'Alex';
const lName = 'Hunter';

fname = 'Jane'; // OK
lName = 'Dow'; // Error

console.log(fname);

let num1 = 10;
const num2 = 12;

num1 = 11; // OK
num2 = 13; // Error: Assignment to constant variable.

console.log(num1);

// Boolean
let bool1 = true;
const bool2 = true;

bool1 = false; // OK
bool2 = false; // Error: Assignment to constant variable.

console.log(bool1);

const car = {
    type: 'sport',
    year: 2008
}
car.year = 2023;
console.log(car);

// Using variable before its declaration

let student = 'John';
console.log(student); // 'John'

const student2 = 'John';
console.log(student2); // 'John'

console.log(student3); // Cannot access 'student3' before initialization
let student3 = 'John';

console.log(student4); // Cannot access 'student3' before initialization
const student4 = 'John';

console.log(student5); // undefined but not error
var student5 = 'John';

// Template Literals
const jsOutput =   `
In this chapter, we’ll learn how to output text or data using the console.log() method.

console.log() is a built-in function used to log/print given text or data to the console.
It is primarily used for debugging and troubleshooting purposes.
You can see the values passed into this function in the console of a web browser or a JavaScript runtime environment.
Overall, console.log() is a useful tool for developers to inspect and monitor the behavior of their JavaScript code by printing relevant information to the console.
`;

let sum= 0;
var numbers = [1, 2, 3];
numbers.forEach((n) => sum+=n);
console.log(sum);


// RECAP
function a() {
    let a = 1;
    let b = function () {
        console.log(a);
        let c = function() {
            console.log(a);
        }
        c();
    }
    b();
}
a();

//Continue ES6

const year = 2023;
const type = 'horror';

// before ES6
const movie = {
    year: year,
    type: type
}

//after
const movie2 = {
    year,
    type
}

//Destruction

const moviesArray = [20, 'Horror'];






// SPREAD OPERATOR

function printNums() {
    console.log(arguments);
}

//printNums((1, 2, 3));


console.log([1, 2, 3]);
console.log(...[1, 2, 3]);


const arr1 = [1,2,3];
const arr2 = [4,5,6];
// to concatinate theme into a new array we can use spread and the easies way is 

const resultArr = [...arr1, ...arr2];
console.log(resultArr);

// REST OPERATOR
function primeAdminDetails1(num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
}


const primeAdminDetails2 = (num1, num2, num3) => {
    console.log(num1);
    console.log(num2);
    console.log(num3);
}

primeAdminDetails1(1,2,3)
primeAdminDetails2(1,2,3)
