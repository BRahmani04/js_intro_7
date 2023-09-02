
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

console.log('\n Task 05\n');

function countWords(array) {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].trim().split(' ').length) i++;
    }
    return array[i]
}
console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));



function countWords(array) {
    return array.trim().split(' ').length
}