

let str1 = "";

let firstWord = str1.slice(0, 4);
let middleWord = str1.slice(4, str1.length - 4);
let lastWord = str1.slice(str1.length - 4);

let swap = lastWord + middleWord + firstWord;

console.log(swap);


function swap4(string5) {
    if (string5.length >= 8) {
        return string5.slice(string5.length - 4) + (string5.slice(4, string5.length - 4)) + (string5.slice(0, 4));
    }
    else {
        return "";
    }
}
console.log(swap4("JavaScript"));
console.log(swap4("abc"));




// Task 10

function swapLastFirstWord (word) {
    if (word.indexOf(" ") >= 1) return word.slice(word.lastIndexOf(" ")) + " " + word.slice(word.indexOf(" "), word.lastIndexOf(" ")) + " " + word.slice(0, word.indexOf(" "))
    else return "";
}
console.log(swapLastFirstWord("Hello World"));
console.log(swapLastFirstWord("I like JavaScript"));
console.log(swapLastFirstWord("abc"));
console.log(swapLastFirstWord("foo bar foo bar"));
console.log(swapLastFirstWord("Hello"));
console.log(swapLastFirstWord(""));
console.log(swapLastFirstWord(" "));


let num = 5;
console.log(num % 5 === 0);

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
 }
 
 let num1 = 1;
 let num2 = 10
 let num3 = 9;
 console.log(num1, num2, num3);
 
 console.log(Math.max(num1,  num2,  num3));
 console.log(Math.min(num1, num2, num3));
 console.log(Math.abs(Math.max(num1, num2, num3) - Math.min(num1, num2, num3)));


 function longer(word1, word2) {
    if (word1.length > word2.length) return word1
   else return word2
 }

 console.log(longer("Hello", "World"))
 console.log(longer("Hello", "hi"))