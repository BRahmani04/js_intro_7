
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
    return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' ') + 1);
}

console.log(firstlastWord('I like JavaScript'))
console.log(firstlastWord(''))

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

const startVowel = (str) => {return ('aouie'.includes(str[0].toLowerCase()))}

console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel("Hello"));

/*
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers.
*/

const averageOfEdges = (n1, n2, n3) => { return (Math.max(n1, n2, n3) + Math.min(n1, n2, n3)) / 2}

console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));



/*
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/

function replaceFirstLast (str) {
    return str.slice(str.length - 1) + str.slice(1, str.length - 1) + str[0]
}

console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Tech Global'));

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

function swapFirstLastWord(str) {
    if(str.trim().includes(' ')) return str.slice(str.lastIndexOf(' ') + 1) + str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1) + str.slice(0 , str.indexOf(' '))
    return ''
}

console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));

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
    for(let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++)
    if(i % 5 === 0) arr.push(i)
    return arr
}

console.log(getMultipleOf5(3, 17));

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

