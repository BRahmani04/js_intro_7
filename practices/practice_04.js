
function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}
/*
Requirement:
Assume you are given a number between 1 and 100 (both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100
Test data 1:
34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter
Test data 2:
76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/
let num1 = 100;
console.log(num1);

if (num1 <= 50 || num1 <= 100) {
    console.log("1st half")
}
        if (num1 <= 25) {
            console.log("1st quarter");
        }
        else if (num1 >= 26) {
            console.log("2nd quarter");
        }
        else if (num1 >= 51) {
            console.log("3rd quarter");
        }
        else if (num1 >= 76) {
            console.log("4th quarter");
        }
        else { 
        console.log("2nd half");
    }

// right asnwer

let num1 = 5;

if (num1 <= 25) {
    console.log(`${num1} is in the 1st half\n${num1} is in the 1st quarter`);
}
else if (num1 <= 50) {
    console.log(`${num1}is in the 1st half\n${num1} is in the 2nd quarter`);
}
else if (num1 <= 75) {
    console.log(`${num1}is in the 2nd half\n${num1} is in the 3rd quarter`);
}
else {
    console.log(`${num1}is in the 2nd half\n${num1} is in the 4th quarter`);
}

/ WAY-2
if(num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
}
else {
    console.log(`${num1} is in the 2nd half`);
}
if(num1 <= 25) {
    console.log(`${num1} is in the 1st quarter`);
}
else if(num1 <= 50) {
    console.log(`${num1} is in the 2nd quarter`);
}
else if(num1 <= 75) {
    console.log(`${num1} is in the 3rd quarter`);
}
else {
    console.log(`${num1} is in the 4th quarter`);
}
// WAY-3
if(num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    if(num1 <= 25) {
        console.log(`${num1} is in the 1st quarter`);
    }
    else {
        console.log(`${num1} is in the 2nd quarter`);
    }
}
else {
    console.log(`${num1} is in the 2nd half`);
    if(num1 <= 75) {
        console.log(`${num1} is in the 3rd quarter`);
    }
    else {
        console.log(`${num1} is in the 4th quarter`);
    }
}
// SHORT for WAY-3
if(num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    if(num1 <= 25) console.log(`${num1} is in the 1st quarter`);
    else console.log(`${num1} is in the 2nd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half`);
    if(num1 <= 75) console.log(`${num1} is in the 3rd quarter`);
    else console.log(`${num1} is in the 4th quarter`);
}
// TERNARY for WAY-3
if(num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    console.log(num1 <= 25 ? `${num1} is in the 1st quarter` : `${num1} is in the 2nd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half`);
    console.log(num1 <= 75 ? `${num1} is in the 3rd quarter` : `${num1} is in the 4th quarter`)
}

//Task 02
/*
Assume you are given 2 numbers to be 0 or 1.
Print true if they are same number.
Otherwise, print false
*/

let num21 = 1, num22 = 2;
// PR\rofessional way
console.log(num21 === num22);
// Cool guy way
console.log(num21 === num22 ? true : false);
// safe guy way
if (num21 === num22) {
    console.log("true");
}
else {
    console.log("false")
}
// I am Human way
if ((num21 === 0 && num22 === 0) || (num21 === 1 && num21 === 1) ) console.log("true");
else console.log("false")



// Task 03
let num31 = 4 , num32 = 6, num33 = 7;

console.log(num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0);



// Task 04
/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
Test data 1:
"v"
Expected result 1:
"v"  is a letter
Test data 2:
"5"
Expected result 2:
"5"  is a digit

*/

let var4 = "5"; 
if (var4.charCodeAt(0) >= 48 && var4.charCodeAt(0) <= 57) {
    console.log(`${var4} is a diggit`);
    }
    else {
        console.log(`${var4} is a letter`)
    }

console.log(var4.charCodeAt(0));

// OR
let var4 = "v";
if("0123456789".includes(var4)) console.log(`"${var4}" is a digit`);
else console.log(`"${var4}" is a letter`);

// Task 05

let var1 = 'v';

if (var1.charCodeAt(0) >= 65 && var1.charCodeAt(0) <= 90) console.log(`${var1} is a uppercase letter`)
else if (var1.charCodeAt(0) >= 97 && var1.charCodeAt(0) <= 122) console.log(`${var1} is a lowercase letter`)
else console.log("INVALID INPUT")

// Task 06

let var2 = "$";

if (var2.charCodeAt(0) > 0 && var2.charCodeAt(0) <= 31) console.log(`'${var2}" is not a special character`);
else if (var2.charCodeAt(0) >= 48 && var2.charCodeAt(0) <= 57) console.log(`'${var2}" is not a special character`);
else if (var2.charCodeAt(0) >= 65 && var2.charCodeAt(0) <= 90) console.log(`'${var2}" is not a special character`);
else if (var2.charCodeAt(0) >= 97 && var2.charCodeAt(0) <= 122) console.log(`'${var2}" is not a special character`);
else console.log(`"${var2}" is a special character`);

// Task 07

let var7 = "A";
let firstChar7 = var7.charCodeAt(0);
if((firstChar7 >= 65 && firstChar7 <= 90) || ((firstChar7 >= 97 && firstChar7 <= 122))) {
     // letter -> aeouiAEOUI
    if("aeouiAEOUI".includes(var7)) console.log(`"${var7}" is a vowel`);
    else console.log(`"${var7}" is not a vowel`);
}
else {
    console.log("INVALID INPUT");
}
// WAY - 2
if("aeouiAEOUI".includes(var7)) console.log(`"${var7}" is a vowel`);
else if((firstChar7 >= 65 && firstChar7 <= 90) || ((firstChar7 >= 97 && firstChar7 <= 122))) console.log(`"${var7}" is not a vowel`);
else console.log("INVALID INPUT");

// TASK 08
let var3 = " ";
if (var3.charCodeAt(0) === 32)  console.log(`'${var3}"is a white space`);
else if (var3.charCodeAt(0) >= 48 && var3.charCodeAt(0) <= 57) console.log(`'${var3}" is a digit`);
else if (var3.charCodeAt(0) >= 65 && var3.charCodeAt(0) <= 90) console.log(`'${var3}" is a letter`);
else if (var3.charCodeAt(0) >= 97 && var3.charCodeAt(0) <= 122) console.log(`"${var3}"is a letter`)
else console.log(`"${var3}" is a special character`);
