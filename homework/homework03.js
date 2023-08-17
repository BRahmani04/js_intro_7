
console.log("\nTASK 01");

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let number1 = getRandomNumber(1, 100);
let number2 = getRandomNumber(1, 100);
let number3 = getRandomNumber(1, 100);

console.log(number1, number2, number3);

let result = number1 + number2 + number3;

console.log(result);

console.log(result / 3 >= 50);

console.log("\nTask 02\n");

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let num1 = getRandomNumber(1, 3);
let num2 = getRandomNumber(1, 3);
let num3 = getRandomNumber(1, 3);

console.log(num1, num2, num3);
if (num1 === num2 && num1 === num3) {
     console.log("TRIPLE MATCH");
}
else if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
     console.log("NO MATCH");
}     
else {
    console.log("DOUBLE MATCH");
}

console.log("\nTask 03\n");


function hasA(str) {
    return str.toLowerCase().includes("a");
}

console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));

console.log("\nTask 04\n");

function doubleOrTripleWord(word) {
    if (word.length % 2 === 0)  return  word + word + word;
    else return  word + word;
    
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("APPLE"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

console.log("\nTask 05\n");

function firstWord(str1) {
   if (str1.includes(" ")) return str1.slice(0, str1.indexOf(" "));
   else return str1;
}

console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord("  "));

console.log("\nTask 06\n");

function lastWord(str2) {
    if(str2.includes(" ")) return str2.slice(str2.lastIndexOf(" ")).trimStart();
    else return str2;
}

console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord("  "));

console.log("\nTask 07\n");

function firstLastWord (str3) {
    if(str3.includes(" ")) return str3.slice(0, str3.indexOf(" ")) + str3.slice(str3.lastIndexOf(" ")).trimStart();
    else return str3 + str3
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord("  "));

console.log("\nTask 08\n")

function startVowel(string1) {
    return "aeiouAEIOU".includes(string1[0])
}


console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("  "));
console.log(startVowel("123"));

console.log("\nTask 09\n");


function swap4(string5) {
    if (string5.length >= 8) {
        return string5.slice(string5.length - 4) + (string5.slice(4, string5.length - 4)) + (string5.slice(0, 4));
    }
    else {
        return "";
    }
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4(" "));
console.log(swap4("Apple"));

console.log("\nTask 10\n");

function swapLastFirstWord (word) {
    if (word.trim().includes(" ")) return word.slice(word.lastIndexOf(" ")) + word.slice(word.indexOf(" "), word.lastIndexOf(" ")) + " " + word.slice(0, word.indexOf(" "));
    else return "";
}
console.log(swapLastFirstWord("Hello World"));
console.log(swapLastFirstWord("I like JavaScript"));
console.log(swapLastFirstWord("abc"));
console.log(swapLastFirstWord("foo bar foo bar"));
console.log(swapLastFirstWord("Hello "));
console.log(swapLastFirstWord(""));
console.log(swapLastFirstWord(" "));
