const student = {
    fName: 'Alex',
    lName: 'Smith',
    age: '30',
    fullName: function () {
        return `${this.fName} ${this.lName}`
    },
    info: function () {
        return `${this.fullName()}'s age is ${this.age}`;
    }
};

console.log(student.fName); // Alex
console.log(student.lName); // Smith
console.log(student.age); // 30
console.log(student.fullName()); // Alex Smith 
console.log(student.info());// Alex Smith's age is 30


