

const numbers = [3, 4, 7, 3, 2,, 2, 7];
let sum = 0;

for (const number of numbers) {
    sum += number;
}

console.log(sum / numbers.length);


/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers from the first 2 arrays and output the third array as well.
[ 45, 24, 10, 1, 0 ]
*/
const firstArray = [5, 8, 2, 1, 2];
const secArray = [9, 3, 5, 1, 0];
const thirdArray = [];


for (let i = 0; i < firstArray.length; i++) {
     thirdArray.push(firstArray[i] * secArray[i]); 
}
console.log(firstArray)
console.log(secArray)
console.log(thirdArray);


/*
Please find the first even number from the below array
*/

let nums = [1, 3, 0, 2, 6, 8];
let firstEven = null;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
    firstEven = nums[i];
    break;
    }
}
console.log(firstEven)

// ORR

let firstEven = null;
let nums = [1, 3, 0, 2, 6, 8];
for (let num of nums) {
   if (num % 2 === 0) {
    firstEven = num;
    break; 
}
}
console.log(firstEven);

/*
how to reverese a string
*/

let name = "John";

let reversedName = ' '

for(let i = name.length-1; i >= 0; i--) { 
   reversedName += name[i]
}
console.log(reversedName);
// orr
let reversedName2 = name.split('').reverse().join('');

console.log(reversedName2)




const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];

for (const city of cities) {
    if (city.length % 2 !== 0) {
    console.log(city)
    break ;
    }
}

for (let i = 0; i < cities.length; i++) {
    if (cities[i] % 2 !== 0){
        console.log(cities[i])
        break;
    }
}


const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
const longCities = [];

for(const city of cities) {
    if (city.length > 5) longCities.push(city)
}

console.log(longCities);