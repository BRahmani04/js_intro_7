
/*
Write a function named fizzBuzz1() which takes a number argument and returns "Fizz"
 if the given number is divisible by 3, "Buzz" if the number is divisible by 5,
  and "FizzBuzz" if the number is divisible by both 3 and 5. Otherwise, it will return the number itself.​
*/

(`\n Task 01 \n`);

function fizzBuzz1(num) {
    if(num % 15 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return num;
}

console.log(fizzBuzz1(0))
console.log(fizzBuzz1(1))
console.log(fizzBuzz1(3))
console.log(fizzBuzz1(5))
console.log(fizzBuzz1(30))
console.log(fizzBuzz1(10))
console.log(fizzBuzz1(15))
console.log(fizzBuzz1(-15))

/*
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. 
However, it will return "Fizz" for the numbers divided by 3, "Buzz" 
for the numbers divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
*/

(`\n Task 02 \n`);

function fizzBuzz2(num) {
    let array = []
    for (let i = 1; i <= num; i++){
        if(i % 15 === 0) array.push('FizzBuzz');
        else if (i % 3 === 0) array.push('Fizz');
        else if (i % 5 === 0) array.push('Buzz');
        else array.push(i);
    }
    return array;
}

console.log(fizzBuzz2(3))
console.log(fizzBuzz2(5))
console.log(fizzBuzz2(10))
console.log(fizzBuzz2(15))
console.log(fizzBuzz2(2))

/*
Write a function named findSumNumbers() which takes a string argument and returns sum of the all numbers appears in the string.
*/
(`\n Task 03 \n`);

function findSumNumbers (string){
    let sum = []
    for (let word of string){
        if ('0123456789'.includes(word)) sum.push(word)
        else sum.push(' ')
    }
    const sum1 = sum.join('').split(' ')
    let num3 = 0
    for ( const num of sum1){
        num3 += Number(num)

    }
    return num3
}


console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));

/*
Write a function named findBiggestNumber() which takes a string argument and returns the biggest number appears in the string.
*/
(`\n Task 04 \n`);

function findBiggestNumber(str) {
    let sum = []
    for (let num of str){
        if ('0123456789'.includes(num)) sum.push(num)
        else sum.push(' ')
    }
    const sum1 = sum.join('').split(' ')
    let num3 = 0
    for ( const x of sum1){
        if(num3 < Number(x)) num3 = x

    }
    return num3
}

console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c  6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));
console.log(findBiggestNumber("3 for 10 dollars"));

/*
Write a function named countOccurrencesOfCharacters() which takes a string argument and returns the count of repeated characters in the String.​
NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
*/
(`\n Task 05 \n`);

function countOccurrencesOfCharacters(string){
    let value = ''
    let result = ''
    for(let i = 0; i <= string.length - 1; i++) {
        let count = 0
    if(!value.includes(string[i])) {
        for(let j = i; j <= string.length - 1; j++) {
            if(string[i] === string[j]) count++ , value = string[j]
            else break;
        }
        result += count + value
    }
}
return result
}

console.log(countOccurrencesOfCharacters(''));
console.log(countOccurrencesOfCharacters('abc'));
console.log(countOccurrencesOfCharacters('abbcca'));
console.log(countOccurrencesOfCharacters('aaAAa'));
console.log(countOccurrencesOfCharacters('www'));

/*
Write a function named fibonacciSeries1() which takes a number n argument and returns the n series of Fibonacci numbers as an array. ​
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/
(`\n Task 06 \n`);

function fibonacciSeries1(num) {
    let fibonacci = [0, 1];
    if(num <= 1) return[0]
    for(let i = 0; i < num -2; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
    }
    return fibonacci[num - 1];
}

console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

/*
Write a function named fibonacciSeries2() which takes a number n argument and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/
(`\n Task 07 \n`);

function fibonacciSeries2(num) {
    let fibonacci = [0, 1];
    for(let i = 0; i < num -2; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
    }
    return fibonacci[num - 1];
}

console.log(fibonacciSeries2(2))
console.log(fibonacciSeries2(4))
console.log(fibonacciSeries2(8))
console.log(fibonacciSeries2(9))
console.log(fibonacciSeries2(1))

/*
Write a function named findUniques() which takes two array of number arguments 
and returns the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array.
*/
(`\n Task 08 \n`);

function findUniques(arr1, arr2) {
    const a = arr1.filter((value, index) => arr1.indexOf(value) === index)
    const b = arr2.filter((value, index) => arr2.indexOf(value) === index)
    const uniq = a.concat(b);
    const result = []
    for(const el of uniq){
        if(!a.includes(el) || !b.includes(el)) result.push(el)
    }
    return result;
}
console.log(findUniques([], [1, 2, 3, 2]))
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]))
console.log(findUniques([8, 9], [9, 8, 9]))
console.log(findUniques([-1, -2], [1, 2]))




/*
Write a function named isPowerOf3() which takes a number argument and returns true if given number is equal to 3 power of the X. Otherwise, return false.​
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
*/
console.log('\n Task 09 \n')

function isPowerOf3(number) {
    if(number === 3 || number === 1) return true 
    for(let i = 0; i <= number; i++) {
       number = number / 3
        if(number === 3) return true
        else if(number < 3) return false
    }
    return false
}

console.log(isPowerOf3(1))
console.log(isPowerOf3(2))
console.log(isPowerOf3(3))
console.log(isPowerOf3(27))
console.log(isPowerOf3(100))
console.log(isPowerOf3(81))
console.log(isPowerOf3(9))