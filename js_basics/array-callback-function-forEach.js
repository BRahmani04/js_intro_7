
const names = ['John', 'Jane', 'Alex', 'Max']

names.forEach(names => console.log(names)); // 'John', 'Jane', 'Alex', 'Max'


names.forEach(name => console.log(name[0])); // J J A M


names.forEach(name => console.log(name.toUpperCase())); // JOHN JANE ALEX MAX



// count how many names has 4 letters
let count = 0;
for (const letters of names) {
    if (letters.length === 4) count++;
}

console.log(count)

//orr 
let count1 = 0;

names.forEach((name) => name.length === 4 ? count1++: count1)

console.log(count1)

// Print each number

const numbers = [5, 10, 3, 0, -2];
// Print each number
numbers.forEach(number => console.log(number));
// print each number multiplied by 5 
numbers.forEach(number => console.log(number * 5))
// print true for even number and false for odd numbers
numbers.forEach(number => console.log(number % 2 === 0));


// creat a new array that multiplies each of the number by 3

const newArray = numbers.map((x) => x * 3);
console.log(newArray);