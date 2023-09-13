// Equality and Comparison

// === vs ==

console.log(10 === '10') //false
console.log(10 == '10') //true

// !== vs !=

console.log(10 !== '10') // true
console.log(10 != '10') //false

//Example

console.log([] == false); // true
console.log([] === false); // false
console.log([] == ![])// true
console.log(false == !true) // true

// Conditional Statements
if({}) console.log('--- empty object is true');
if(undefined) console.log('--- undefined is true');
if(null) console.log('---- null is true');
if(true) console.log('--- true is true');
if(false) console.log('--- false is true');
if(0) console.log('--- 0 is true');
if(NaN) console.log('--- NaN is true');
if('') console.log('---  is true');
if('some string') console.log('--- some string is true');

let nullishval = null;
let defualtval = "Defualt value"
console.log(nullishval ?? defualtval); //"Defualt value"
console.log(nullishval === true ? nullishval : defualtval) // Defaul value

// null Check Example

const product = {
    prices: {
        regularPrice: 29.99,
        discountPrice:25.99
    },
    title: 'Mouse',
}
console.log(product.isAvailable)
console.log(product?.isAvailable)

if (product.isAvailable) {
    console.log('Product is available')
} else {
    console.log("products object doesn't have a key called isAvailable");
}

if('development') {
    console.log('password')
} else {
    console.log('has version of password')
}

// console => object
let response = 'WARNING';

if(response === 'SUCCESS') {
    console.log('success')
} else if(response === 'WARNING') {
    console.warn('Warning');
} else {
    console.error('Error');
}

// console.time();
console.time();
for(let i=0; i < 10000; i++) {
    console.log();
}
console.timeEnd();

