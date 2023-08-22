
const arr = [];
console.log(arr.length);// 0

arr.push("Apple");
console.log(arr.length); // 1
console.log(arr); // ["Apple"]


arr.push("Orange", "Kiwi", "Banana");
console.log(arr.length);
console.log(arr); // [ 'Apple', 'Orange', 'Kiwi', 'Banana' ]

// POP()

arr.pop();
arr.pop();

console.log(arr.length); // 2
console.log(arr); //[ 'Apple', 'Orange' ]