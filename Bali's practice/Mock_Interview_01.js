



coe.log((3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false)); nsol // true
console.log((!true && !false) || 5 * 2 === true * 10); // true
console.log("3" * "5" >= 15 && true == 1 && " " == false && "" === 0); // false
console.log(!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5));// false
console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1"); // true
console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange")); // false
console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false));// true
console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false)); // true
console.log((4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat")); // true
console.log((20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true)); // false
console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10));// false
console.log((5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true)); // false
console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true)); // true
console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0)); //true
console.log((5 * 2 === 9 || true) && !(10 - 5 !== 5 && 10 % 3 === 1)); // true

// 1

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
let n1 = getRandomNumber(1, 10);
console.log(n1)
console.log(n1 % 2 === 0);
// OR
if (n1 % 2 === 0) {
    console.log("True");
}
else {
    console.log("False");
}
// 3

let n2 = getRandomNumber(-5, 5);
console.log(n2);
console.log(n2 > 0);

// 4

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let n3 = getRandomNumber(1, 50);
console.log(n3);
console.log(n3 % 5 === 0);

// 5

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let n4 = getRandomNumber(1, 50);
console.log(n4);

console.log(n4 % 7 === 0);

// 6
function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let n5 = getRandomNumber(1, 10);
let n6 = getRandomNumber(1, 10);
console.log(n5, n6);
console.log(n5 + n6);

// 7

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
let abs = getRandomNumber(1, 10);
let abs1 = getRandomNumber(1, 10);
console.log(abs, abs1);
console.log(Math.abs(abs - abs1));

// 8

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let product = getRandomNumber(1, 10);
let product1 = getRandomNumber(1, 10);
console.log(product, product1);
console.log(product * product1);

// 9

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let sqr = getRandomNumber(1, 10);

console.log(sqr);
console.log(sqr * sqr);

// 10

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let cube = getRandomNumber(1, 10);
console.log(cube);
console.log(cube * cube * cube);

// 11

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
let m1 = getRandomNumber(1, 10);
console.log(m1);

function miles(m1) {
    return m1 * 1.6;
}
console.log(miles(m1));

console.log(m1 * 1.6);
// 12

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let kg = getRandomNumber(1, 100);
console.log(kg);

function kilogram(kg) {
    return kg * 2.2
}

console.log(kilogram(kg));
//or 
console.log(kg * 2.2);

// 13

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let randumNum = getRandomNumber(1, 3);
let randumNum1 = getRandomNumber(1, 3);
console.log(randumNum, randumNum1);

console.log(randumNum === randumNum1);

// 14

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let age = getRandomNumber(1, 100);
console.log(age);

console.log(age >= 16);

// 15

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let number1 = getRandomNumber(1, 10);
let number2 = getRandomNumber(1, 10);
console.log(number1, number2);
console.log(Math.max(number1, number2));

// 16

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let n10 = getRandomNumber(1, 10);
let n11 = getRandomNumber(1, 10);
let n12 = getRandomNumber(1, 10);

console.log(n10, n11, n12);

console.log(Math.max(n10, n11, n12));

// 17

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let numb1 = getRandomNumber(1, 10);
let numb2 = getRandomNumber(1, 10);
console.log(numb1, numb2);
console.log(Math.min(numb1, numb2));

// 18

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let nu1 = getRandomNumber(1, 10);
let nu2 = getRandomNumber(1, 10);
let nu3 = getRandomNumber(1, 10);
console.log(nu1, nu2, nu3);
console.log((nu1 + nu2 + nu3) / 3);

// 18

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let qt = getRandomNumber(1, 100);
console.log(qt);

if (qt > 0 && qt <= 25) console.log(`${qt} is 1st quarter`);
else if (qt > 25 && qt <= 50) console.log(`${qt} is 2nd quarter`);
else if (qt > 50 && qt <= 75) console.log(`${qt} is 3rd quarter`);
else console.log(`${qt} is the 4th quarter`);

// 19

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let mid = getRandomNumber(1, 100);
console.log(mid);

if (mid <= 50) console.log(`${mid} is 1st Half`);
else console.log(`${mid} 2nd Half`);

// 20

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let n32 = getRandomNumber(1, 10);
let n33 = getRandomNumber(1, 10);
console.log(n32, n33);

console.log((n32 + n33) % 2 === 0);

// 21

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let n34 = getRandomNumber(1, 10);
let n35 = getRandomNumber(1, 10);
console.log(n34, n35);

console.log((n34 * n35) % 2 === 1);

// 22

function rectangleArea(x, y) {
    return Area = x * y
}
console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));

// 23

function rectanglePerimiter(x, y) {
    return Perimiter = 2 * (x + y);
}
console.log(rectanglePerimiter(5, 4));
console.log(rectanglePerimiter(3, 7));
console.log(rectanglePerimiter(6, 10));

// 24 

function squareArea(x) {
    return Perimiter = x * x;
}
console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

// 25

function squarePerimiter(x) {
    return Perimiter = 4 * x
}

console.log(squarePerimiter(5));
console.log(squarePerimiter(3));
console.log(squarePerimiter(6));

// 26 
function doubleWord(word) {
    return word + word
}
console.log(doubleWord("Tech"));
console.log(doubleWord("Global"));

// 27

function firstCharacter(word) {
    return word[0];
}

console.log(firstCharacter("Tech"));
console.log(firstCharacter("Global"));

// 28 

function firstCharacter(word) {
    return word.slice(0, 2);
}

console.log(firstCharacter("Tech"));
console.log(firstCharacter("Global"));

// 29

function lastCharacter(word) {
    return word.slice(-1);
}

console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter("123"));

// 30

function lastCharacter(word) {
    return word.slice(-2);
}

console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter("123"));

// 31

function firstlastCharacter(word) {
    return word[0] + word.slice(-1);
}

console.log(firstlastCharacter("Tech"));
console.log(firstlastCharacter("Global"));
console.log(firstlastCharacter(""));
console.log(firstlastCharacter("abcde"));

// 32

function hasFive(word) {
    return word.length >= 5;
}

console.log(hasFive("Tech"));
console.log(hasFive("Global"));
console.log(hasFive(""));
console.log(hasFive("12345"));
console.log(hasFive("hello"));

// 33

function middle(word) {
    if (word.length % 2 === 0) return word.slice(word.length / 2 - 1, word.length / 2 + 1);
    else return word[(word.length - 1) / 2];
}
console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("abc"));
console.log(middle("abc"));
console.log(middle("abcdefg"));

// 34



function longer(word1, word2) {
    if (word1.length < word2.length) return word2
    else return word1
}

console.log(longer("global", "tech"));
console.log(longer("hello", "hi"));
console.log(longer("hello", "world"));
console.log(longer("hello", "12345"));

// 35

function longer(word1, word2) {
    if (word1.length < word2.length) return word1
    else return word2
}


console.log(longer("global", "tech"));
console.log(longer("hello", "hi"));
console.log(longer("hello", "world"));
console.log(longer("hello", "12345"));

// 36

function concat(word1, word2) {
    return word1 + word2
}

console.log(concat("tech", "global"));
console.log(concat("hello", "world"));
console.log(concat("", "tech"));

// 37 

function startVowel(word1) {
    return ("AEOUIaeoui".includes(word1[0]));
}

console.log(startVowel("Tech"));
console.log(startVowel("Apple"));
console.log(startVowel("abc"));



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num1 = getRandomNumber(1, 10);
console.log(num1);
console.log(num1 % 2 === 0);


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num1 = getRandomNumber(1, 100);
console.log(num1);

if (num1 <= 50) console.log("1st half");
else console.log("2nd half");

function hasFive(string) {
    return string.length >= 5;
}

console.log(hasFive("Tech"));
console.log(hasFive("global"));
console.log(hasFive("hello"));
console.log(hasFive("12345"));

function shorter(word1, word2) {
    if (word1.length >= word2.length) return word2;
    else return word1;
}

console.log(shorter("Tech", "Global"));
console.log(shorter("Tech", "helo"));

function lastCharacter(word) {
    return word.slice(-1);
}
console.log(lastCharacter("Tech"));

function middle(str) {
    if (str.length % 2 === 0) return str.slice(str.length / 2 - 1, str.length / 2 + 1);
    else return str[(str.length - 1) / 2];
}
console.log(middle("Tech"));
console.log(middle("Techo"));

function firstLast(word) {
    if (word.length > 1) return word[0] + word.slice(-1);
    else return word
}
console.log(firstLast("tech"));

function middle(word) {
    if (word.length % 2 === 0) return word.slice(word.length / 2 - 1, word.length / 2 + 1);
    else return word[(word.length - 1) / 2];
}
console.log(middle("Global"));

function middle(str) {
    if (str.length > 1) return str[0] + str.slice(-1);
    else return str
}
console.log(middle("techglobal"));


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let num1 = getRandomNumber(1, 10);
    console.log(num1);
    console.log(num1 * num1 * num1);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
        }
        let num1 = getRandomNumber(1, 10);
        let num2 = getRandomNumber(1, 10);
        console.log(num1, num2);
        console.log(Math.min(num1, num2));

        function startVowel(str) {
            return "AEOUIaeoui".includes(str[0]);
            }
            console.log(startVowel("Tech"));
            console.log(startVowel("Apple"));
