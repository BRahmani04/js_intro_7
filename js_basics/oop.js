const person = {
    name: 'Yuliia',
    greet() {
        console.log(`Hello my name is ${this.name}`)
    }
};

console.log(person);

function createPerson() {
    let obj = {}
    obj.name = 'Yuliia',
    obj.greet = function {
        console.log(`Hello my name is ${this.name}`)
    }
    console.log(obj);
    return obj;
}

const Yuliia = createPerson(name);

// Prototypical Chain

const date = new Date('December 17, 1995 03:24:00')
console.log(date);
console.log(typeof date); // object











// CLASS

class Animal12 {
    constructor(name) {
        //Header
        this.name = name;
    }
    //Class body
    getDetails() {
        console.log(`${this.name}`)
    }
}
const animal = new Animal12('Animal name');
console.log(animal);
animal.getDetails

class Cat2 extends Animal12 {
   
    constructor(name, breed) {
        super(); // it calls parent class constructor
        this.name = name;
        this.breed = breed;
    }
}
const cat2 = new Cat2('Leo', 'Bengal');
console.log(cat2)

class Dog2 {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}
const dog = new Dog2('Lia', 'French Bulldog');
console.log(dog)

// GEtter and Setter

class Person {
    #name = 'Joe'

    getName() {
        return this.#name;
    }
    setName(val) {
        this.#name = val
    }
    get name1() {
        return this.#name;
    }
    set name1(val) {
        this.#name = val
    }
}
const p = new Person();
console.log(p.name);
p.set= 'Igor';
console.log(p.name)



/*
1. Create a "Course" class which has three properties: "title", "length" and "price" (all set up in the constructor). Instantiate the class twice (two dummy courses of your choice). Output the objects to the console.
2. Add two methods to the "Course" class: A method which calculates the length/price value ("how much length do you get for the amount paid") and one method that outputs a nice course summary (including title, length and price). Call these methods thereafter (and output the result to the console).
3. Create two new, more specialized, classes: "PracticalCourse" and "TheoreticalCourse". Both should be based on the "Course" class but "PracticalCourse" should also have a "numOfExercises" property, "TheoreticalCourse" should have a "publish()" method (which just prints something to the console). Instantiate both and use the new AND old properties and methods.
4. Use getters and setters to ensure that the "price" property can only be set to a positive value and is returned with a "$" in front of it.
*/
class Course {
    constructor(title, length, price){
        this.title = title;
        this.length = length;
        this.price = price;
    }
    get price(){
        return '$' + this._price;
    }
    set price(val) {
        if(val > 0) {
            return this._price = val
        }
    }
    calculate(){
        return this.length / this.price;
   }
   printSummary(){
    return (`${this.title} lasts ${this.length} and costs ${this.price}$`);
   }
}

const jsCourse = new Course('JavaScript Course', 6, 8000);
const cypressCourse = new Course('Cypress Course', 3, 4000);
console.log(jsCourse);
console.log(cypressCourse);

console.log(jsCourse.calculate());
console.log(jsCourse.printSummary());

console.log(cypressCourse.calculate());
console.log(cypressCourse.printSummary());

console.log(jsCourse.price);
jsCourse.price = 14;
console.log(jsCourse.price)

class PracticalCourse extends Course{
    constructor(title, length, price, numOfExercises){
        super(title, length,price)
    this.numOfExercises = numOfExercises
    }
}
const pCourse = new PracticalCourse('Practical Course', 2, 1000, 12)
console.log(pCourse)
pCourse.calculate()
class TheoreticalCourse extends Course{
    publish(){
        return 'Course published today!';
    }
}
const tCourse = new TheoreticalCourse('SDLC', 3, 1500);
console.log(tCourse);
console.log(tCourse.printSummary());
console.log(tCourse.calculate());