console.log('\n TASK 01 \n')

/*
Write a function named toInitials() which takes a string argument considered to be full name and returns initials of the given full name.
*/

const toInitials = (string) => {
    let initial = ''
    for(const str of string.split(' ')) {
        if(string.indexOf(str) === 0) initial += `${str[0]}. `
        else if (string.indexOf(str) !== 0) initial += `${str[0]}.`
    }
    
    return initial
}

console.log(toInitials( "Joe Doe"))
console.log(toInitials( "Alex Reyes"))
console.log(toInitials( "Tom Cruise"))
console.log(toInitials( "Bruce Willis"))
console.log(toInitials( "Ja Le"))

console.log('\n TASK 02\n')
/*
Write a function named hasNumbers() which takes a string argument and returns true if there is a number and false if there isn’t. 
*/

const hasNumbers = (str) => str.split('').some(x => '12345678'.includes(x))

console.log(hasNumbers(""))
console.log(hasNumbers("John is 34 years old"))
console.log(hasNumbers("Hello 3"))
console.log(hasNumbers("125$"))
console.log(hasNumbers("  a  "))
console.log(hasNumbers("    "))
console.log(hasNumbers("!@#$%^&*()_+"))

console.log('\n TASK 03\n')
/*
Write a function named elementLength() which takes an array argument and returns the length of each element as a separate array.
*/

const elementLength = (array) => array.map(x => x.length)

console.log(elementLength( [ "Hello", "World" ] ))
console.log(elementLength( [ "Apple", "Banana", "Orange", "Pear" ]))
console.log(elementLength( ["BMW", "Mercedes", "Audi" ]))
console.log(elementLength( []))
console.log(elementLength( [ "Trampoline", "", "Tennis", "Basketball" ]))


console.log('\n TASK 04\n')
/*
Write a function named isArraySumEvenOrOdd() which takes an array of numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
*/

const isArraySumEvenOrOdd = (arr) => arr.reduce((arr, curr) => (arr + curr), 0) % 2 === 0 ? 'even' : 'odd'

console.log(isArraySumEvenOrOdd([]))
console.log(isArraySumEvenOrOdd( [ 0, -1, -5 ] ))
console.log(isArraySumEvenOrOdd( [ 7, 1, 8, 1 ] ))
console.log(isArraySumEvenOrOdd( [ 0, 0 ] ))
console.log(isArraySumEvenOrOdd( [ 1, 1, 1, 1, 1]))

console.log(`\n TASK 05\n`)
//Write a function named reverse() which takes a string argument and returns the given string reversed.

const reverse = (str) => str.split('').reverse().join('')

console.log(reverse("Hello World"))
console.log(reverse("TechGlobal"))
console.log(reverse("Basketball"))
console.log(reverse(""))
console.log(reverse("Apples 456"))

console.log(`\n TASK 06 \n`)
/*
Write a function named reverseWords() which takes a string argument and returns a string with each word 
within that string reversed but still in the same order as the initial string. 
*/

const reverseWords = (str) => str.split(' ').map(x => x.split('').reverse().join('')).join(' ')

console.log(reverseWords("Hello World"))
console.log(reverseWords("TechGlobal"))
console.log(reverseWords("Basketball"))
console.log(reverseWords(""))
console.log(reverseWords("Apples 456"))
