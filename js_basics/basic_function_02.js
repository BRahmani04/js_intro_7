
//Wrtite a function called product3 that takes 3 arguments and returns their multiplication

function product3(a, b, c){
    return a * b * c
}

console.log(product3(1, 4, 7));

//OR

let product = product3(1, 4, 7);
console.log(product);


// TRicky part

console.log(product3("2", "5", "3")); //30
console.log(product3(null, "", false)); // 0 - because null is 0, "" is 1, false is 0 so the answer is 0 
console.log(product3("  ", true, "10abc")); // NaN becuase "10abc" is not a number 


// Write a function called isOdd that takes an argument and returns true if the argument is odd, and false otherwise

function isOdd(a){
   return a % 2 !== 0
}

console.log(isOdd(23)); // true
console.log(isOdd(5)); // true
console.log(isOdd(-5)); // true
console.log(isOdd(10)); // false




//  Write a function called isEven that takes an argument and returns true if the argument is odd, and false otherwise

function isEven(b){
    return b % 2 === 0
}
console.log(isEven(5));
console.log(isEven(23));
console.log(isEven(7));
console.log(isEven(-5));
console.log(isEven(4));
console.log(isEven(8));

// Tricky part
console.log(isOdd("")); // false
console.log(isEven(""));// true
console.log(isEven("" * 5 + true));// true
console.log(isEven("" / 1 + 8));// true