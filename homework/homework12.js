
console.log('\n Task 01 \n')

function makeNegative (num) {
    if(num > 0) return 0 - num
    else return num
}

console.log(makeNegative(10))
console.log(makeNegative(-7))
console.log(makeNegative(0))
console.log(makeNegative(0.45))


console.log('\n Task 02 \n')

const isSumEvenOrOdd = (n1, n2, n3) => {
    if((n1 + n2 + n3) % 2 === 0) return 'even'
    else  return 'odd'
}

console.log(isSumEvenOrOdd(0, 1, 4))
console.log(isSumEvenOrOdd(0, -1, -5))
console.log(isSumEvenOrOdd(0, 0, 0))
console.log(isSumEvenOrOdd(7, 1, 9))
console.log(isSumEvenOrOdd(1, 1, 1))

console.log('\n Task 03 \n')

const decimal2 = array => array.map(num => Number(num.toFixed(2)))

console.log(decimal2([94.356, 8.9752]))
console.log(decimal2([76.62, 128.4, 84]))
console.log(decimal2([20987, 3.53245, 12.345, 32.9]))
console.log(decimal2([]))
console.log(decimal2([4.35623, 8.9742]))

console.log('\n Task 04 \n')

const myPow = (x, n) => {
    if(x === 0 || n === 0) return 1
    else return x ** n
}

console.log(myPow(3, 3))
console.log(myPow(10, 1))
console.log(myPow(100, 0))
console.log(myPow(1, 1))
console.log(myPow(4, 2))
console.log(myPow(0, 0))
console.log(myPow(5, 3))

console.log('\n Task 05 \n')

const findLongestWord = string => string.split(' ').sort((a, b) => b.length - a.length)[0]

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
console.log(findLongestWord('This is a sample string for testing'))
console.log(findLongestWord('One two ten'))
console.log(findLongestWord(''))
console.log(findLongestWord('   '))