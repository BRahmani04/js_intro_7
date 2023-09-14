//Keyword 'this'

function PrintName(name) {
    console.log(this) // window or object
    console.log(name);
}

PrintName('Ulan');

// Implicit binding

const person = {
    name: 'Alan',
    age: 29,
    PrintName() {
        console.log(this.name);
    },
    mother: {
        hobbies: ['running', 'baking'],
        name: 'Jane',
        PrintName() {
            console.log(this.name);
        }
    }
}

person.PrintName(); // Alan, this = person object
person.mother.PrintName(); // Jane

// Function is not inside the object

const p = {
    name: 'Alan',
    age: 29,
}

function PrintName1() {
    console.log(this.name)
}
PrintName1()
PrintName1.call(p); // ALan


//BIND

function printHobbies(h1, h2, h3) {
    console.log(`Hi, my name is ${this.name} and My hobbies are ${h1}, ${h2} and ${h3}`);
}
const hobbies = ['Reading', 'Coding', 'Fishing'];
printHobbies.call(p, hobbies[0], hobbies[1], hobbies[2])

// Apply

printHobbies.apply(p, hobbies); // basically you can add all the hobbies or a function with multiply elements on an array with apply and it get them together

// Bind

const bindedPrintHobiies = printHobbies.bind(p, hobbies[0], hobbies[1], hobbies[2])
bindedPrintHobiies(); // same as calling but here first you make it as variable then call that variable.

// this keyword inside 'normal function' vs 'arrow function';

function logMessage() {
    console.log('this inside normal function', this);
}

const logMessage1 = () => {
    console.log(`this inside arrow function`, this)
}
logMessage();
logMessage1();

const person3 = {
    name: 'Bali',
    languages: ['English', 'Albanian', 'Arabic', 'Chinese'],
    printLanguages() {
        const modifiedLang = this.languages.map(function (lang) {

            //console.log(lang)
            //console.log(this);
            return `--${lang}`
        }
        )
        console.log(modifiedLang)
    }
}

person3.printLanguages()
