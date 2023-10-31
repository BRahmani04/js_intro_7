
/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked.
*/

console.log('\nTask 01\n');

const doubleOrTripleWord = word => {
    if (word.length % 2 === 0) return word + word + word
    return word + word
}
console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Apple'));

/*
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
*/

const firstlastWord = (str) => {
    if(str.includes(' ')) return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' ') + 1)
    else return str + str
}

console.log(firstlastWord('I like JavaScript'))
console.log(firstlastWord(''))
console.log(firstlastWord('Hello'))
/*
Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/

function hasVowel(str) {
    for (const word of str)
    if ('aeoui'.includes(word.toLowerCase())) return true
    return false
}

console.log(hasVowel("ABC"));
console.log(hasVowel("1234"));

/*
Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/

const startVowel = (str) => ('aouie'.includes(str[0].toLowerCase()))

console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel("Hello"));

/*
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers.
*/

const averageOfEdges = (n1, n2, n3) => (Math.max(n1, n2, n3) + Math.min(n1, n2, n3)) / 2

console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));



/*
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/

function replaceFirstLast (str) {
    if (str.trim().length < 2) return ''
    return str.slice(str.length - 1) + str.slice(1, str.length - 1) + str[0]
}

function replaceFirstLast(str) {
    if(str.trim().length < 2) return '';
    return str[str.length - 1] + str.slice(1, str.length - 1) + str [0]
}


console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Tech Global'));
console.log(replaceFirstLast('A'))
console.log(replaceFirstLast('   A    '))

/*
Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
*/

function swap4 (str) {
    if(str.length < 8) return ''
     return str.slice(str.length - 4) + str.slice(4, str.length -4) + str.slice(0 , 4)
    
}

console.log(swap4("JavaScript"));
console.log(swap4(""));

/*
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
*/
/*
function swapFirstLastWord(str) {
    if(str.trim().includes(' ')) return str.slice(str.lastIndexOf(' ') + 1) + str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1) + str.slice(0 , str.indexOf(' '))
    return ''
}
*/

function swapFirstLastWord(str) {
    if(str.trim().includes(' ')) return str.slice(str.lastIndexOf(' ') + 1) + str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1) + str.slice(0, str.indexOf(' '))
    return ''
}

console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord('Hello'))
/*
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked.
*/

function countPos (array) {
    let count = 0;
    for (const num of array) {
        if(num > 0) count ++
    }
    return count
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));

 // -------------- OR --------------//

 const countP = (array) => array.filter(x => x > 0).length
 console.log(countP([-45, 0, 0, 34, 5, 67]));
/*
Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when 
invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
*/

function getEvens(n1, n2) {
    let arr = [];
    for(let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++)
    if(i % 2 === 0) arr.push(i)
    return arr
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));       

/*
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when 
invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers.
*/

function getMultipleOf5(n1, n2) {
    let arr = [];
    for(let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
    if(i % 5 === 0) arr.push(i)
    }
    if(n1 < n2) return arr
    return arr.reverse()

}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));

/*
Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument and 
returns how many elements are negative when invoked.
*/

function countNeg(array) {
    let count = 0;
    for(const num of array)
    if(num < 0) count ++
    return count
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]))

// ------ ORR ----//

const countNeg = (array) => array.filter(x => x < 0).length


// COUNT A
const countA = (str) => str.split('').filter(x => x.toLowerCase() === 'a').length

console.log(countA('TechGlobal is a QA bootcamp'))


//COUNT WORDS

const countWords = (str) => str.trim().split(' ').length

console.log(countWords('   Javascript is fun   '))

//FACTORIal 

function factorial(num) {
    let fac = 1
    for(let i = 1; i <= num; i++) {
        fac *= i
    }
    return fac
}
console.log(factorial(5))

// COUNT 3 or LESS

function count3(str) {
    let count = 0
    let string = str.split(' ')
    for(const word of string){
        if(word.length <= 3 && word.length !== 0) count++
    }
    return count
}

console.log(count3('Hello'))
console.log(count3('JAvascropt is fun'))

// REMOVE EXTRA SPACES

const remove = (str) => str.split(' ').filter(x => x.length >= 1).join(' ')

console.log(remove('     Javascript is     fun'))

// MIDDLE NUMBER
const middle = (n1,n2,n3) => [n1,n2,n3].sort((a, b) => a - b)[1]

console.log(middle(-1, 23, 10))

// FIRST DUPLICATE

function firstDuplicate(Array) {
    
for (let i = 0; i < Array.length; i++) {
    let currentNum = Array[i];
    let rest = Array.slice(i + 1);
    if (rest.includes(currentNum)) return currentNum
}
    return -1
}


console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate(1,2,3,4))

//FIND ALL DUPLICATes

function getDuplicates(array){
    let arr = []
    for(let i = 0; i <= array.length; i++){
        let current = array[i]
        let rest = array.slice(i + 1)
        if(rest.includes(current) && !arr.includes(current)) arr.push(current)
    }
    return arr
}

console.log(getDuplicates([0, 3, 4, 3, 7, 5, 7]))

// COUNT VOWELS

const count = (str) => str.split('').filter(x => 'aeiou'.includes(x.toLowerCase())).length

console.log(count('Hello'));
console.log(count('Apple'));

// REVERSE STRING WORDS

const reverse = (str) => str.split(' ').map(x => x.split('').reverse().join('')).join(' ')

console.log(reverse('Hello World'))


// COUNT CONSONANTS

const countC = (str) => str.split('').filter(x => !'aeiou'.includes(x.toLowerCase())).length

console.log(countC('Hello World'))

//COUNT MULTIPLE WORDS

const countM = (str) => str.filter(x => x.trim().includes(' ')).length

console.log(countM(['f o o', 'b a r', 'foo bar', '  foo bar  ']))
console.log(countM(['foo', 'bar', 'foobar', '    foobar  ']))

// FIZZBUZZ 

function fizzbuzz(n1,n2) {
    let arr = []
    for(let i = Math.min(n1,n2); i <= Math.max(n1,n2); i++){
        if (i % 15 === 0) arr.push('FizzBuzz')
        else if (i % 3 === 0) arr.push('Fizz')
        else if (i % 5 === 0) arr.push('Buzz')
        else arr.push(i)
    }
    return arr.join(' | ')
}

console.log(fizzbuzz(13, 18))
console.log(fizzbuzz(12, 5))

//PALINDROME

const palindrome = (str) => {
    reverseString = str.split(' ').reverse().join(' ')

    return str.toLowerCase() === reverseString.toLowerCase()
}

console.log(palindrome('Kayak'))

// PRIME NUMBER

function isPrime(num) {
    if (num < 2) return false
    for(let i = 2; i < num; i++){
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(29))
console.log(isPrime(41))

// ADD TWO ARRAYS

function add(arr1, arr2) {
    let arr3 = [];
    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++)
        arr3.push((arr1[i] || 0) + (arr2[i] || 0))
        return arr3
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))

// NO A

const noA = (str) => str.map(x => x[0] === 'A' || x[0] === 'a'? '###' : x)

console.log(noA(['javascript', 'apple', 'Apple']))

//NO ELEMENTS D BY 5 and 3

function no3and5(array){
    let arr = []
    for(const num of array){
        if (num % 15 === 0) arr.push(101)
        else if (num % 5 === 0)  arr.push(99)
        else if (num % 3 === 0)  arr.push(100)
        else arr.push(num)
    }
    return arr
}

console.log(no3and5([7, 4, 15, 5, 3]))

//no13

const no13 = (num) => num.map(x => x === 13 ? 0 : x);

console.log(no13([13,2,3]))

// REMOVE ALL DUPLICATES
/*
function removeD(array) {
    let arr = []
    for(let i = 0; i < array.length; i++){
    let num = array[i]
    let n = array.slice(i + 1)
    if(!n.includes(num)) arr.push(num)
    }
    return arr
}
*/

function removeD(array) {
    let arr = new Set
    for(const el of array){
        arr.add(el) 
}
    return [...arr]
}
console.log(removeD([10, 20, 35, 20, 35, 60, 70, 60]))

//NO DIGITS

const noDigits = (str) => str.split('').filter(x => (!'1234567890'.includes(x))).join('')

console.log(noDigits('123hello World123'))

// noVowels

const noVowels = (str) => str.split('').filter(x => !'aeiou'.includes(x.toLowerCase())).join('');

console.log(noVowels('TechGlobal'))

// SUM OF DIGITS

function sum(str) {
    let num = 0
    for(const word of str) {
        if(Number(word)) num += Number(word)
    }
return num
}

console.log(sum('John is 23'))

// ARRAY FACTORIAL

const factorial = (arr) => arr.map(x => {
    let factorial = 1
    for (let i = 1; i <= x; i++)
    factorial *= i
return factorial
})

console.log(factorial([0, 5]))