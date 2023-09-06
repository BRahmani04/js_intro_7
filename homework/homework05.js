
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
    return array.trim().split(' ').length;
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
console.log('\n Task 06\n');

function factorial(number) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
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
console.log('\n Task 07\n');

function isPalindrome(str) {

    reverseString = str.split('').reverse().join('');

    return str.toLowerCase() === reverseString.toLowerCase();
}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

/*
Write a function named as countMultipleWords() which takes an array as an argument
 and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
*/
console.log('\n Task 08\n');

function countMultipleWords(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let str = array[i].trim();
        let word = str.split(' ');
        if (word.length > 1) count++
    }
    return count;
}

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]));
console.log(countMultipleWords([]));


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
console.log('\n Task 09\n');

function count3OrLess(string) {
    const arr = string.split(' ');
    let count = 0;
    for (const word of arr) {
        if (word.length <= 3 && word.length !== 0) count++

    }
    return count;
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
console.log('\n Task 10\n');

function isPrime(number) {
    if (number < 2) return false;
    for (let i = 0; i < number; i++) {
        if (number % i === 0) return true;
    }
    return false
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

/*
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
*/
console.log('\n Task 11\n');

function add(arr1, arr2) {
    const sum = [];
    const max = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < max; i++) {
        let num = arr1[i] || 0;
        let number = arr2[i] || 0;
        sum.push(num + number);
    }
    return sum;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));



/*
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.
*/
console.log('\n Task 12\n');

function removeExtraSpaces(str) {
    return str.split(' ').filter(x => x.length >= 1).join(' ');
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("   Hello  World  "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

/*
Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
*/
console.log('\n Task 13\n');

function findClosestTo10(arr) {
    let num = Infinity;
    for (let i = 0; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - 10);
        if (arr[i] === 10) continue;
        else if (diff < Math.abs(num - 10)) num = arr[i];
        else if (diff === Math.abs(num - 10) && arr[i] < num) num = arr[i];
        
    }
    return num;
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57,]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));


/*
Write a function named as isEmailValid() which takes a string email as an argument
 and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.
*/

console.log('\n Task 14\n');


function isEmailValid(string) {
    if (string.includes(' ')) return false
    else if (!string.includes('.com')) return false
    else if (string.split('@').length > 2) return false
    else if (string.split('@')[0].length < 2) return false
    else if (string.split('@')[1].split('.')[0].length < 2 ) return false
    else if (string.split('.')[1].length < 2) return false
   return true
}
console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@gmail.com"));


/*
Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

*/

console.log('\n Task 15\n');

function isPasswordValid(string) {
    if (string.length < 8 || string.length > 16 || string.includes(' ')) return false
    
    let hasDigit = false;
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasCharacter = false;

    for (const char of string){
    
        if(char >= 0 && char <= 9)  hasDigit = true
        else if (char >= 'A' && char <= 'Z')  hasUpperCase = true
        else if (char >= 'a' && char <= 'z')  hasLowerCase = true
        else if ("!@#$%^&*()_+{}[]:;<>,.?~\\/-".includes(char))  hasCharacter = true
    }
    
   return hasDigit && hasUpperCase && hasLowerCase && hasCharacter;
}


console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd12345"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));

