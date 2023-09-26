// HOISTING

//Hoisting is basically to clg before declaring variable and it doesnt work with let or const but with VAR we get undefined 
// Hoisting is even when you have declaretion low it moves the initialization before declaretion.

console.log(name) ; // with var we get undefined 
var name = 'John'

console.log(name1) // ReferenceError: Cannot access 'name1' before initialization
let name1 = 'Bali' 

console.log(sum(3, 5)); // 8
function sum(a, b) {
    return a + b
}
// so basically hoisting works with functions but we have to be carfull with function expression or arrow functions
console.log((sum(5, 5))); // 10 


const myFunction1 = function () {
    console.log('Funciton 1')

} // this is function expression 

const myFunction2 = () => console.log('Function 2'); // this is an arrow function

myFunction1();// Function 1
myFunction2(); // Function 2

// -------------------------------------------------------//

//SCOPE
// scope is something that determines the accessibility(access) of variable, object, and function

// Global Scope
var city = 'Chicago';
const state = 'IL';
let country = 'US';

console.log(city);
console.log(state);
console.log(country);

if(true) {
    console.log(city, state, country);
}

// GLOBAL SCOPE are because variables that are declared outside function object 

// FUNCTION SCOPE

function sum(arr) {
    let total = 0 // FUNCTION SCOPe basicaly belongs to sum function
    for(const num of array) {
        total += num
 }
 return total
}

console.log(total); // ReferenceError: total is not defined

// LOCAL(BLOCK) SCOPE
{
    var num1= 1;
    let num2 = 2;
    const num3 = 3;

    console.log(num1); // 1
    console.log(num2); // 2
    console.log(num3); // 3
}
console.log(num1);
console.log(num2); //ReferenceError: num2 is not defined
console.log(num3); // ReferenceError: num2 is not defined

// LEXICAL SCOPE - we see this with nested functions

function outer() {
    let outerVariable = 'OUTER';

   function inner() {
    let innerVariable = 'INNER';
    console.log(innerVariable);
    console.log(outerVariable);
    }
    console.log(outerVariable);
    console.log(innerVariable);
    
}

outer();


// CLOSURE - it makes it possible for function to have 'private' variable

function score() {
    let initalScore = 0; // function scope and it cannot be accessed outside the function - it is private to the score function
    
    const inner = function () {
        return initalScore += 1
    };

    return inner;
}

const annyFunction = score()
console.log(annyFunction()) // 1
console.log(annyFunction()) // 2
console.log(annyFunction()) // 3

