// Write a program that outputs numbers from 5 to 25

for (let i = 5; i <= 25; i++ ) {
    console.log(i); // 5 6 7 8 9 10 ...... 25
}

// Write program that outputs number between 15 and 1 descending

for (let i = 15; i >= 1; i--) {
    console.log(i); // 15 14 13 12 11 .... 1
}

// Write a program that outputs only even numbers from 0 to 10 (0 and 10 are included)

for (let i = 0; i <= 10; i++) {
    if(i % 2 === 0) console.log(i); // 0 2 4 6 8 10
}

for (let i = 0; i <= 10; i += 2) {
    console.log(i); // 0 2 4 6 8 10
}

for (let i = 0; i <= 5; i++) {
   console.log(i * 2); // 0 2 4 6 8 10
}

//Write a program to check numbers from 1 to 50 (both included) and ouput all the numbers that can be divided by 5

for (let i = 1; i <= 50; i ++) {
    if (i % 5 === 0) console.log(i); // 5 10 15 20 .... 50
}

//Write a program that finds the sum of the numbers from 1 to 5
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}

console.log(sum);

//Write a program that finds the sum of numbers from 10 to 15 (both inclusive)

let sum1 = 1;
for (let i = 1; i <= 15; i++) {
    sum1 *= i;
}

console.log(sum1);


