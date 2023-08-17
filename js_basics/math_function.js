

let num1 = 5, num2 = 10, num3 = 7, num4 = -5, num5 = -8;

// -8, -5, 5, 7, 10

let maxNumber = Math.max(num1, num2, num3, num4, num5);
console.log(maxNumber); //10 

let minNumber = Math.min(num1, num2, num3, num4, num5);

console.log(minNumber); // -8

// The abs() method - whatever is the value the result will always be positive
// abs stands for absoulte
console.log(Math.abs(num4)); // 5
console.log(Math.abs(num1 * num5 - num4)); // 35

// Rounding numbers
// (CEIL) always goes up one number
// (FLOOR) it always goes down
// (ROUND) it rounds the number 
console.log(Math.ceil(5.11)); //6
console.log(Math.ceil(5.99)); //6
console.log(Math.floor(5.11)); //5
console.log(Math.floor(5.99)); // 5
console.log(Math.round(5.11)); // 5
console.log(Math.round(5.99));// 6

console.log(Math.trunc(5.99)); //5
console.log(Math.trunc(5.99)); // 5

// pow() function
console.log(2 ** 5);//32
console.log(Math.pow(2, 5)); //32

//sqrt() function

console.log(Math.sqrt(64)); // 8

// random() function

console.log(Math.random()); // 0 to 0.99999999999

console.log(Math.random() * 10);
console.log(Math.ceil(Math.random() + 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));

// Homework: Come up with a way to generate random number between 10 and 20 (both included)

console.log(Math.floor(Math.random() * 11) + 10); // max - min +1 -> 20-20 = 11 
console.log(Math.ceil(Math.random() * 11) + 9); // 
console.log(Math.round(Math.random() * 10 + 10)); // 

// Come up with a way to generate random number between 10 and 20 (both included)
// Math.floor(Math.random() * (y - x +1) + x



