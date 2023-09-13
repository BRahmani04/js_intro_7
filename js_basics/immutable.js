// Immutable

let city = 'Chicago'

console.log(city)
//try to change the string to variable
city[0] = 'P';
console.log(city);


const employee = {
    name: 'Jane',
    lName: 'Doe',
    title: 'Hr'
}

//prevent from updating above object

Object.freeze(employee);
employee.name = 'Joe';
console.log(employee); // { name: 'Jane', lName: 'Doe', title: 'Hr' }

const employee2 = employee;
employee2.title = 'instructor';
console.log(employee2); // { name: 'Jane', lName: 'Doe', title: 'Hr' }

//check if object isa frozen

console.log(Object.isFrozen(employee)); // true

//How to know If property belongs to original object 

const obj1 = {id: 1};
const obj2 = {...obj1, title:'simple object'};

console.log(obj2); // { id: 1, title: 'simple object' }
console.log(obj2.hasOwnProperty('title')); // true
console.log(obj2.hasOwnProperty('id')); // true

