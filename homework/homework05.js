
/*
Write a function named countPos() which takes an array of numbers as an argument
 and returns how many elements are positive​ when invoked. 
*/
console.log('\n Task 01\n');

function countPos(numbers) {
    let count = 0;
    for (const number of numbers) {

        if (number > 0) count++;
    }

    return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

/*
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 
*/
console.log('\nTask 02\n');

function countA(Array) {
    let count = 0;
    for (const number of Array.toLowerCase()) {
        if (number.includes('a')) count++;
    }
    return count;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

/*
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
*/
console.log('\n Task 03\n');

function countVowels(Array) {
    let count = 0;
    for (const number of Array.toLowerCase()) {
        if (('AEOUIaeoui'.includes(number))) count++;
    }
    return count;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

/*
Write a function named as countConsonants() which takes a string word as an argument
 and returns the count of the consonant letters when invoked.
*/
console.log('\n Task 04\n');

function countConsonants(Array) {
    let count = 0;
    for (const number of Array.toLowerCase()) {
        if ((!'AEOUIaeoui'.includes(number))) count++;
    }
    return count;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

/*
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.
*/

console.log('\n Task 05\n');

function countWords(array) {
    return array.trim().split(' ').length
}  

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));


/*
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
*/

function factorial(number) {
    let factorial = 1;
    for(let i = 1; i <= number; i++) { 
        factorial *= i;
    }
    
    return factorial;
}


console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/*
Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity
*/

function isPalindrome(str) {
   
    return str.toLowerCase().split('').toString().replaceAll(',', '') === str.toLowerCase().reverse()
} 
console.log(isPalindrome("Hello"))
console.log(isPalindrome("Kayak"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("abba"))
console.log(isPalindrome("ab a"))
console.log(isPalindrome("123454321"))
console.log(isPalindrome("A"))
console.log(isPalindrome(""))

/*
Write a function named as countMultipleWords() which takes an array as an argument
 and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
*/

function countMultipleWords(array) {
    let count = 0;
    for (let i = 0; i < array.lengthl; i++) {
        let str = array[i];
        let rest = array.slice(i + 1);
        if(rest.indexOf('foo')) count++
    }
    return count
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));



function countMultipleWords(array) {
    return array.filter(x => x.toLowerCase().indexOf('foo')).length ;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));


/*
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 3
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0
*/

function count3OrLess(string) {
    const arr = string.split(' ')
    let count = 0;
    for (const word of arr){
        if (word.length <= 3 && word.length !== 0) count++
        
    }
    return count
}
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

/*
Write a function named as isPrime() which takes a number as an argument and
 returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
*/

function isPrime(number) {
   if (number < 2) return false
   for (let i = 0; i < Math.sqrt(number); i++){
    if (number % i === 0) return true 
}
return false
}
console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))