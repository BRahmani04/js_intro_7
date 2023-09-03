const names = ['John', 'Jane', 'Alex'];

// Create a new array with all names uppercased -> [ 'JOHN', 'JANE', 'ALEX' ]

const namesUpper = names.map((name) => name.toUpperCase());

console.log(namesUpper); // [ 'JOHN', 'JANE', 'ALEX' ]




/*
    [
        { index: 0, value: 'John' },
        { index: 1, value: 'Jane' },
        { index: 2, value: 'Alex' }
    ]
*/


const result = names.map((name, i) => ({
    index: i,
    value: name, 
}));

console.log(result);

const result2 = [] ;
let count = 0;
for (const name of names) {
    let object = {
        index: count++,
        value: name
    }
    result2.push(object)
}

console.log(result2)