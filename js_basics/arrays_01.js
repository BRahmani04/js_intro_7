

const cities = ["Chicago", "Miami", "San Francisco"];
console.log(cities); // [ 'Chicago', 'Miami', 'San Francisco' ]

console.log(cities[1]); // Miami
console.log(cities[1][0]); //Miami , M - getting the first letter you need to do the city first end then ask for the first letter

// you can update your values in the array with thein indexes
cities[2] = "Berlin";
console.log(cities); // [ 'Chicago', 'Miami', 'Berlin' ]


const numbers = [5, 3, 2, 10];
numbers[20] = 100;
console.log(numbers)
console.log(numbers[-5]);
console.log(numbers[-1]);
console.log(numbers[100]);
console.log(numbers[4]);

// you can have all of these in an array basically whatever you want
const mixData = ["Hello", true, 12, 10.5, undefined, null, new Date(), ["Hello"], {}];
console.log(mixData);