const numbers = [5, 10, 100,];

console.log(numbers.reduce((acc, curr) => acc + curr ));// 115
console.log(numbers.reduce((acc, curr) => acc * curr ));//5000 basically 5 * 10 = 50 and 50 * 100 = 5000


const sumEvens = numbers.filter(x => x % 2 === 0).reduce((sum, num) => sum + num);
console.log(sumEvens);
// orr

console.log(numbers.reduce((sum, num) => {
    if (num % 2 === 0) return sum + num
    else return sum
}, 0));