/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer and Watching movies
exam_scores : midterm = 60 and final = 90
Output your object to the console
*/
const student = {
    fName: 'Alex',
    lName: 'Smith',
    hobbies: ['Soccer', 'Watching Movies'],
    examScores: {
        midterm: 60,
        final: 90
    }
};

console.log(student);

console.log(student.hobbies);
console.log(student.examScores);
console.log(student.hobbies[0]);
console.log((student.examScores.midterm + student.examScores.midterm) / 2); // 60

/*

*/

const book = {
    name: 'Amok',
    authors: {
        first_name: 'Stefan',
        last_name: 'Zweig',
    },
    genre: "Novella"
};

console.log(book);


const books = [
    {
        name: 'Amok',
        authors: {
            first_name: 'Stefan',
            last_name: 'Zweig',
        },
        genre: "Novella"
    },
    {
        name: 'My Name is Red',
        authors: {
            first_name: 'Orhan',
            last_name: 'Pamuk',
        },
        genre: "Historical Novel"
    },
    {
        name: 1984,
        authors: {
            first_name: 'George',
            last_name: 'Orwell',
        },
        genre: 'Dystopian Literature'
    },
];

console.log(books.length); // tells us how many elemtes are tthere 3
console.log(books[1]);
console.log(books[2].authors.last_name);

// Count the books where Author first name has an 'a' 
let count = 0;
for (const book of books) {
    if(book.authors.first_name.includes('a')) count++;
}

console.log(`There are ${count} author/s that has a in their names`);