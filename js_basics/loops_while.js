
for (let i = 1; i < 10; i++) {
    console.log(i);
}


let num = 1;
while (num < 10) {
    num++;
    console.log(num); // 2 - 10 - if you put num++ at the beggining it goes up by 1 
}


let num1 = 1;
let countE = 0;
while(num1 < 10) {
    if (num1 % 2 === 0) countE++;
    num1++
}

console.log(countE);


// playing the number guess gamw
let number = 7;

let randomNumber = Math.floor(Math.random() * 50) + 1;

let attempts = 1;

while(number !== randomNumber) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts++;
}

console.log(`The random number is finally ${randomNumber} and it is the number we are looking for   
it took ${attempts} time attempts to generate it!`);

/*
Write a program that generates a random number between 1 to 50 (both inclusive)
Continue generating the number till you get a random number divisible 10
*/

let random = Math.floor(Math.random() * 50) + 1;

let attempt = 1;

while(random % 10 !== 0) {
    console.log(random)
    random = Math.floor(Math.random() * 50) + 1;
    attempt++;
}
console.log(`the random number is ${random} divisible by 10 and it took ${attempt} times to generate it`);
