
const car = {
    color : 'red',
    year : '2023',
    make : 'BMW',
    model : 'X7'
};

const keys = Object.keys(car);


console.log(keys); // [ 'color', 'year', 'make', 'model' ];

console.log(Object.values(car)) // [ 'red', '2023', 'BMW', 'X7' ]

const allPairs = Object.entries(car);
console.log(allPairs); // [[ 'color', 'red' ],[ 'year', '2023' ],[ 'make', 'BMW' ],[ 'model', 'X7' ]

// looping all the value of the car object with or...of loop

console.log(`\n-----------------\n`);

for (const value of Object.values(car)) {
    console.log(value);
}

// looping all the value of the car object with for....in loop
console.log(`\n----------------------\n`);

for (const x in car) {
    console.log(car[x]);
}

// looping all the keys of the car object with for....in loop
console.log(`\n----------------------\n`);

for (const keys of Object.keys(car)) {
    console.log(keys)
}


// looping all the keys and values of the car object with for....in loop
console.log(`\n----------------------\n`);

for (const [key, value] of Object.entries(car)) {
    console.log(`${key} = ${value}`);
}





const arr = [3, 4, 5, 6, 7];

let count = 0;
