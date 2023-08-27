// while

let number = 2;
let randomNumber = Math.floor(Math.random() * 10) + 1; // 
let attempts = 1;
while(number !== randomNumber){
    console.log(randomNumber);
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts++;
}
console.log(`The random number is finally ${randomNumber} and it is the number we looking for
It took ${attempts} time/s attempts to generate it!`)

// dowhile
let number = 2;

let randomNumber;

let attempts = 0;

do {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts++
} while(number !== randomNumber)



console.log(`The random number is finally ${randomNumber} and it is the number we are looking for   
it took ${attempts} time attempts to generate it!`);


//while
let num = 1;
while(num <= 3) {
    console.log("WHile loop - Hello World");
    num++
}

// dowhile
num = 1;
do {
    console.log("Do While Loop - Hello World");
    num++;
} while (num <= 3);
