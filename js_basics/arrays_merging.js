
const arr1 = ['foo', 'bar'] , arr2 = ['fizz', 'buzz'];

console.log(arr1 + arr2 ); // not merging
console.log(arr1.concat(arr2)); 

console.log(typeof (arr1 + arr2));
console.log(typeof arr1.concat(arr2));

console.log(arr1.concat(arr1, arr2, arr1));
