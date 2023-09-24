/*
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t.
*/

function hasLowerCase(string) {
    let str = string.trim()
    for (const word of str) {
        if (word.charCodeAt() >= 97 && word.charCodeAt() <= 122) return true
    }
    return false
}

console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));
console.log(hasLowerCase(" a "));
console.log(hasLowerCase(""));
console.log(hasLowerCase("125$"));

/*
Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.
*/

const noZero = (array) => array.filter(x => x !== 0);


console.log(noZero([0, 1, 10]));
console.log(noZero([1]));
console.log(noZero([1, 10]));
console.log(noZero([0, 0, 0]));

/*
Write a function named numberAndSquare() which takes an array of numbers as argument and
 returns a multidimensional array with all numbers squared.
*/

const numberAndSquare = (array) => array.map(x =>[x, x * x]);

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 1, -10]));

/*
Write a function named containsValue() which takes a string array and a string as arguments and returns a boolean value.
 Search the string variable inside of the array and return true if it exists in the array. If it doesn’t exist, return false.
*/

function containsValue(array, str) {
    return array.includes(str)
}


console.log(containsValue(["abc", "foo", "javascript"], "hello"))
console.log(containsValue(["abc", "def", "123"], "Abc") )
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") );

/*
Write a function named reverseSentence() which takes a string as argument and returns the words in reverse order.​
If there is no enough words reverse, return "There is not enough words!".
*/


function reverseSentence(string) {
    const words = string.split(' ');
    if(words.length <= 1) return 'There is not enough words!'
    let firstUpperCase = words.reverse().join(' ')
    return firstUpperCase[0].toUpperCase() + firstUpperCase.slice(1).toLowerCase();
}

console.log(reverseSentence('Hello'));
console.log(reverseSentence('Javascript is fun'));
console.log(reverseSentence("This is a sentence"));

/*
Write a function named removeStringSpecialsDigits() which takes a string as argument and
 return a string without the special characters or digits.
*/

function removeStringSpecialsDigits(str) {
    let word = '';
    for (const char of str) {
        if((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || (char === ' '))
        word += char
        
    }
    return word;
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));

/*
Write a function named removeArraySpecialsDigits() which takes a string array as argument and
 return back without the special characters or digits.
*/

const removeArraySpecialsDigits = (str) => str.map(str => {
    let word = '';
    for (const char of str) {
        if((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || (char === ' '))
        word += char
        
    }
    return word;
})

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits["Automation", "123#$%tool"]);

/*
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.
*/

function getCommons(arr1, arr2) {
    let arr3 = [];
    for (const word of arr1) {
        if(arr2.includes(word) && !(arr3.includes(word))) arr3.push(word);
    }
    return arr3
}
console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ));
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ));

/*
Write a function named noXInVariables() which takes an array as argument and
 return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
*/

const noXInVariables = (array) =>array.map(x => {
    if(typeof(x) !== 'string')  return x;
    let wordWithX = null
    for(const char of x) {
        if(char.toLowerCase() !== 'x') wordWithX.replaceAll(null, '');
    }
    if(!('x'.includes(wordWithX))){
         return wordWithX 
    }
    return wordWithX
})
console.log(noXInVariables(['abc', 123, '#$%']))
console.log(noXInVariables(['xyz', 123, '#$%']))
console.log(noXInVariables(['x', 123, '#$%']))
console.log(noXInVariables(['xyXyxy', 'Xx', 'ABC']))

/*
Im not sure about this one I have tried to find a solution but i cant get the result at the end.
*/
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))
console.log(noXInVariables(["xyz", 123, "#$%"]))