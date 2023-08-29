
const person = {
    fName : 'John',
    age : 25,
    city : 'Chicago'
};

console.log(person); // { fName: 'John', age: 25, city: 'Chicago' }

// adding more properties
person.lName = 'Doe';
person['gender'] = 'Male';


console.log(person); // { fName: 'John', age: 25, city: 'Chicago', lName: 'Doe', gender : 'Male' }

let personAge = person.age;
console.log(personAge); // 25 

// accessing object properites
console.log(person.fName); // John
console.log(person['city']); // Chicago

// updating values for the specified key 

person.fName = 'Jane';
person['lName'] = 'Smith';

console.log(person.fName); // Jane
console.log(person.lName); // Smith

// deleting object properties

delete person.gender;
delete person.lName;
delete person['city'];

console.log(person); // { fName: 'Jane', age: 25 }


/*
creat a car object
*/

const car = {
    color : 'red',
    year : '2023',
    make : 'BMW',
    model : 'X7'
};

car.color = 'Black';
console.log(car.color); // Black
console.log(car.year); // 2023
console.log(car.make); // BMW
console.log(car.model); // X7