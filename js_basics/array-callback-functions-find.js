const numbers = [0, 10, -4, 5, 2, -3];

//First Positive number - 10
// First Negative - -4
// First Even - 0
//First Odd - 5

console.log(numbers.find(x => x > 0)); // 10
console.log(numbers.find(x => x < 0)); // -4
console.log(numbers.find(x => x % 2 === 0)); //  0
console.log(numbers.find(x => x % 2 !== 0)); //  5


console.log(numbers.findIndex(x => x > 0)); // 10
console.log(numbers.findIndex(x => x < 0)); // -4
console.log(numbers.findIndex(x => x % 2 === 0)); //  0
console.log(numbers.findIndex(x => x % 2 !== 0)); //  5


const things = ['Knife', 'Spoon', 'Fork', 'Pan', 'Mug'];


/*
Find first element that has 3 letters with its index
{
    value: 'Pan',
    index: 3
}
*/

/*
const result = {
    value:  things.find(x => x.length === 3),
    index: things.findIndex(x => x.length === 3)
}

console.log(result);
*/

//ORR 

const result1 = things.map((value, i) => {
    return {
        value: value,
        index: i
    }
}).find(obj => obj.value.length === 3)

console.log(result)

/*
// ALTERNATIVE
for(let i = 0; i < things.length; i++){
    if(things[i].length === 3) {
        const result = {
            value: things[i],
            index: i
        }
        console.log(result);
        break;
    }
}
*/