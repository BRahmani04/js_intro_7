/*
Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.
*/
console.log('\n Task 01\n');

const noSpace = (str) => {
    return str.trim().split(' ').join('');
}

console.log(noSpace(''));
console.log(noSpace('JavaScript'));
console.log(noSpace("    Hello   ") );
console.log(noSpace(" Hello World  ") );
console.log(noSpace('Tech Global'));

/*
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/
console.log('\n Task 02\n');

const replaceFirstLast = (str) => {
    if (str.trim().length < 2) return "";
    return str[str.length-1] + str.slice(1, str.length - 1) + str[0];
};

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("  A   "));

/*
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/
console.log('\n Task 03\n');

const hasVowel = (string) => {
    for (const word of string){
        if ('aeoui'.includes(word.toLowerCase())){
            return true
        }
    }
    return false
};

console.log(hasVowel(''));
console.log(hasVowel('Javascript'));
console.log(hasVowel('Tech Global'));
console.log(hasVowel('1234'));
console.log(hasVowel('ABC'));

/*
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
*/
console.log('\n Task 04\n');

const checkAge = (number) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - number;
    if (number > currentYear) return 'AGE IS NOT VALID'
    else if (age < 16) return 'AGE IS NOT ALLOWED'
    else if (age >= 16 && age <= 120) return 'AGE IS ALLOWED';
   else return 'AGE IS NOT VALID' 
}

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));

/*
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.
*/
console.log('\n Task 05\n');

function averageOfEdges(n1, n2, n3) {
    return (Math.max(n1, n2 ,n3) + Math.min(n1, n2, n3) ) / 2;
};

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));

/*
Write a function named noA() which takes an array of strings as argument and will return a new array with all elements starting with "A" or "a" replaced with "###".
*/
console.log('\n Task 06\n');

const noA = (array) => {
    return array.map(str => {
        if (str.startsWith('a') || str.startsWith('A')) {
            return '###'
        }
        else return str
    })
};


console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]) );

/*
Write a function named no3and5() which takes an array of integer numbers as argument and will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
*/
console.log('\n Task 07\n');

const no3and5 = (array) => {
    return array.map(num => {
        if(num % 5 === 0) return 99;
        else if(num % 3 === 0 ) return 100;
        else if (num % 3 === 0 && num % 5 === 0) return 101;
        else return num;
    })
    
};

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

/*
Write a function named countPrimes() which takes an array of integer numbers as argument and will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
*/
console.log('\n Task 08\n');

const countPrimes = (array) => {
    let count = 0;
    for (let num of array){
    if (num < 2)  count
    else if (num % Math.sqrt(num) === 0) count
    else count++
    }
    return count
};

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));

/*
Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.
*/
console.log('\n Task 09\n');

const removeDuplicates = (array) => {
    return array.filter((value, index) => {
        return array.indexOf(value) === index
    });
    
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

/*
Write a method named isDateFormatValid() that takes a string as an argument and returns true if the given date is valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>
*/

console.log('\n Task 10\n');

const isDateFormatValid = str => {
    const date = str.trim().split('/')
    if(date.length !== 3) return false
    else if (date[0].length !== 2 || parseInt(date[0]) > 12) return false
    else if(date[1].length !== 2 || parseInt(date[1]) > 31) return false
    else if(date[2].length !== 4) return false
    else return true
    
}


console.log(isDateFormatValid(""))
console.log(isDateFormatValid("15/30/2020"))
console.log(isDateFormatValid("10-30-2020 "))
console.log(isDateFormatValid("10.30.2020") )
console.log(isDateFormatValid("5/30/2020"))
console.log(isDateFormatValid("05/30/2020 "))
console.log(isDateFormatValid("10/2/2020") )
console.log(isDateFormatValid("10/02/2020 "))


/*
Write a method named secondMax() takes an array argument and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.
*/


console.log('\n Task 11\n');

const secondMax = array => {
    if (array.length < 2 ){
        return array[0]
    }
    const numbersSort = array.sort((x, y) => y - x);
    const duplicate = numbersSort.filter((value, index) => array.indexOf(value) === index);

    return duplicate[1]
}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));

/*
Write a method named secondMin() takes an array argument and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.
*/
console.log('\n Task 12\n');

const secondMin = (array) => {
    if (array.length < 2) return array[0];
    const numSort = array.sort((x, y) => x - y);
    const dup = numSort.filter((value, index) => array.indexOf(value) === index);

    return dup[1]
};

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]));

/*
Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.
*/
console.log('\n Task 13\n');

const mostRepeated = (array) => {
    if (array.length < 2)
    return array[0];
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++){
            if(array[i] === array[j] && !arr1.includes(arr2)) arr1.push(array[i])
        }
        if(arr1.length > arr2.length) arr2 = arr1;
        arr1 = []
    }
    return arr2[0];
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]));



