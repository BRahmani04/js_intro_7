/*
Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter and false otherwise.
*/

console.log('\n Task 01\n');

function hasUpperCase(string) {
    let str = string.charCodeAt();
    if(str >= 65 && str <= 90){
        return true
} 
else return false
}

console.log(hasUpperCase("javascript")); 
console.log(hasUpperCase("John")); 
console.log(hasUpperCase("$125.0")); 
console.log(hasUpperCase("")); 

/*
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.
*/
console.log('\n Task 02\n');

const noDigit = (str) => str.split('').filter(x => isNaN(x)).join('');


console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));


/*
Write a function named noVowel() which takes a string argument and 
returns a new string with all vowels removed from the original string​.
*/

console.log('\n Task 03\n');

const noVowel = str => str.split('').filter(x => !('AEOUIaeoui'.includes(x))).join('')

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

/*
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. ​
*/

console.log('\n Task 04\n');

const no13 = (array) => array.map(x => x === 13 ? x = 0 : x = x)

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3,]));
console.log(no13([13, 13, 13, 13]));
console.log(no13([]));

/*
Write a function named middleInt() which takes three number arguments and return the middle number. ​
*/

console.log('\n Task 05\n');

const middleInt = (n1, n2, n3) => {
    let middle = [n1, n2, n3]
    let num = middle.sort((x,y) => x - y);
    return num[1]
}

console.log(middleInt(1, 2, 2))
console.log(middleInt(5, 5, 8))
console.log(middleInt(5, 3, 5))
console.log(middleInt(1, 1, 1))
console.log(middleInt(-1, 25, 10))

/*
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​
*/
console.log('\n Task 06\n');
const sumOfDigits = (str) => {
    let sum = 0;
    for(const num of str){
    if(Number(num)) sum += Number(num) 
    }
    return sum
}


console.log(sumOfDigits("Javascript"))
console.log(sumOfDigits("John's age is 29")) 
console.log(sumOfDigits("$125.0")) 
console.log(sumOfDigits(""))

/*
Write a function named arrFactorial() which takes an array of numbers as argument and 
return the array with every number replaced with their factorials.
*/
console.log('\n Task 07\n');
const arrFactorial = (array) => array.map(x => {
    let factorial = 1;
    for(let i = 1; i <= x ; i++){
    factorial *= i
    }
    return factorial;
})


console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));


/*
Write a function named categorizeCharacters() which takes a string word as argument and
 return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
*/

console.log('\n Task 08\n');

function categorizeCharacters(string) {
   
    let newArr = [];
    let newArr1 = [];
    let newArr2 = [];
    for (const word of string) {
        if ((word >= 0 && word <= 9)) newArr1.push(word);
        else if((word.toUpperCase() >= 'A' && word.toUpperCase() <= 'Z')) newArr.push(word);
        else if ("!@#$%^&*()_+{}[]:;<>,.?~\\/-".includes(word)) newArr2.push(word);
       
    }
    let result = [newArr.join(''), newArr1.join(''), newArr2.join('')];
    return result;
}
console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%"));
console.log(categorizeCharacters("12ab$%3c%"));
