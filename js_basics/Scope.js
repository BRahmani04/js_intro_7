// LOg window object

console.log(global); // => huge object

/*
Global Scope
*/

let globalVariable = 'This is global variable';

console.log(globalVariable); // 'This is global variable'

// Global variable is accessible inside function
function someFunction() {
    console.log(globalVariable);
}

someFunction();

// Local Scope

function printColor() {
    var color = 'blue';
    let color2 = 'red';
    let color3 = 'orange';
};

printColor();