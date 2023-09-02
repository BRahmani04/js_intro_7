/*
Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
Examples:
firstPos([0, 3, -9,  5, 8])         -> 3
*/



function firstPos(x) {
    let firstPos = null;

    for (let i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            firstPos = x[i];
            break;
        }
    }
    return firstPos
}

console.log(firstPos([0, 3, -9, 5, 8]))

// ORR

/*
function firstPost(array) {
    let firstPost = null;
    for (const number of array) {
        if (number > 0 ){
            firstPost = number; 
            break;
        }
    }
    return firstPost;
}
*/


/*
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
Examples:
lastNeg([0, 3, -9,  5, 8])          -> -9
lastNeg([-2, 0, -7, 10, -5])        -> -5
*/

function lastNeg(array) {
    for (const number of array.reverse()) {
        if(number < 0) return number
    }
}


console.log(lastNeg([-2, 0, -7, 10, -5])) 

//ORR 

function lastNeg(array) {
    for (let i = array.length-1; i >= 0; i--) {
        if(array[i] < 0) return array[i]
    }
}

console.log(lastNeg([-2, 0, -7, 10, -5])) 


/*
Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more element having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])    -> "yellow"
firstLongest(["Apple", "Banana", "Orange"])         -> "Banana"
firstLongest(["purple", "yellow", "orange"])        -> "purple"
*/
function firstLongest(array){
    let firstLongest = '';
    for(const str of array) {
       if(str.length > firstLongest.length) firstLongest = str;
    }
    return firstLongest;
}
console.log(firstLongest(["red", "blue", "yellow", "white"])); // Yellow
console.log(firstLongest(["Apple", "Banana", "Orange"])); //  Banana
console.log(firstLongest(["purple", "yellow", "orange"])); // purple


/*
Requirement:
Write a function named as lastShortest() which takes an array as an argument and returns the shortest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the shortest count of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])    -> "red"
lastShortest(["Apple", "Banana", "Mango"])          -> "Mango"
lastShortest(["white", "yellow", "brown"])          -> "brown"
*/

function lastShortest(Array) {
    let lastShortest = '';
    let maxLength = Infinity;
    for (const str of Array) {
        if (str.length <= maxLength) { 
            lastShortest = str
            maxLength = str.length
    }
    }
    return lastShortest
}

console.log(lastShortest(["red", "blue", "yellow", "white"])); 
console.log(lastShortest(["Apple", "Banana", "Mango"]));

// ORR

function lastShortest(Array) {
    Shortest = Array[0];
    for (const str of Array) {
        if(str.length <= Shortest.length) Shortest = str;
    }
    return Shortest
}

console.log(lastShortest(["red", "blue", "yellow", "white"])); 
console.log(lastShortest(["Apple", "Banana", "Mango"]));


/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8]) 	    -> 8
max([-2, 0, -7, 10, -5]) 	-> 10
max([1, 2, 3, -2])          -> 3
max([-5, -2])               -> -2
*/

function max(x) {
    let number = null;
    let max = -Infinity;
    for (const greatest of x) {
        if(greatest > max){ 
            number = greatest;
            max = number
    }
}
    return max
}

console.log(max([0, 3, -9,  5, 8])) // 8

function max(x) {
    let number = -Infinity
    for (const greatest of x) {
        if(greatest > number) number = greatest
    }
    return number
}
console.log(max([0, 3, -9,  5, 8]))
console.log(max([-5, -2]))
/*
Requirement:
Write a function named as min() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
*/

function min(x){
    let min = Infinity;
    for (const number of x) {
        if (number < min) min = number;
    }
    return min
}

console.log(min([0, 3,  5, 8])); // 0
console.log(min([-2, 0, -7, 10, -5])); // -7

/*
Requirement:
Write a function named as commonElements() which takes 2 arrays as arguments and 
returns all the matching elements from the both arrays when invoked.
NOTE: Assume you will not be given an empty array.
*/

function commonElements(array1, array2) {
    const commonArray = [];
    for(const number of array1) {
        if(array2.indexOf(number) >= 0) commonArray.push(number)
    }
    return commonArray
}

console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]));
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]));
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));

// ORR
function commonElements(array1, array2) {
    const commonArray = [];
    for(const number of array1) {
        if(array2.includes(number)) commonArray.push(number)
    }
return commonArray
}

console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]));
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]));
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));




function commonElements(array1, array2) {
    let str = [];
    for (const common of array1) {
        if (array2.includes(common)) str.push(common)
    }
return str
}

console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]));
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]));
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]));