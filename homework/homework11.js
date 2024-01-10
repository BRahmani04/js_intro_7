console.log('/n Task 01 /n')
/*
Write a function named countPalindrome() which takes a string and returns the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example: level, radar, deed, refer.
*/

function countPalindrome(string) {
    let words = string.toLowerCase().split(' ')
    let count = 0
        for(const word of words) {
        let reversed =  word.split('').reverse().join('')
        if(word !== '' && word === reversed)
        count ++
     
}
return count
}

console.log(countPalindrome('Mom and Dad'));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"));
console.log(countPalindrome(''));
console.log(countPalindrome("No palindrome here"));

console.log('/n Task 02 /n')

const sum = (arr, boolean) => {

    let sumN = 0
    for(const num of arr) {
        if(arr.indexOf(num) % 2 === 0 && boolean === true) sumN += num
        else if (arr.indexOf(num) % 2 !== 0 && boolean === false) sumN += num
    }
    return sumN
}

console.log(sum([1, 5, 10], true));
console.log(sum([3, 7, 2, 5, 10]), false);
console.log(sum([-1, 1, -2, 2], true));
console.log(sum([0, -1, 15, 1], false));
console.log(sum([1, 2, 3, 4, -4], true));


console.log('/n Task 03 /n'); 

const nthChars = (string, num) => string.split('').filter((value, index) => index % num === num - 1).join('')
    


console.log(nthChars("Java", 2))
console.log(nthChars("JavaScript", 5))
console.log(nthChars("Java", 3))
console.log(nthChars("Hi", 4))
console.log(nthChars("0123456789", 2))

console.log('/n Task 04 /n')

function canFormString(str, word) {

    let arr = []
    for(const el of str) {
        
    }
}

console.log(canFormString('Hello', "Hi"))
console.log(canFormString("programming", "gaming"))
console.log(canFormString("halogen", "hello"))
console.log(canFormString("CONVERSATION", "voices rant on"))
console.log(canFormString("12", "123"))
