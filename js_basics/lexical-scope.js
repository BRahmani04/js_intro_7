// what is scope for example
// Scope chaining
//writeSchoolName() scope ---> saySchoolName() scope ---> schoolProfile() scope ---> global scope

const schoolName = 'Tech Global';

function schoolProfile() {
    const schoolName = 'Global Tech'
    function saySchoolName() {
        const schoolName = 'Tech'
        function writeSchoolName() {
            return schoolName; 
        }
        return writeSchoolName()
    }
    return saySchoolName();
}

console.log(schoolProfile())

// Define a function
// Lexical Scope
function getcityName () {
    const cityName = 'Des Plaines';
    return cityName;
}


function showAddress () {
    return '2860 River Rd, ' + getcityName();
}

console.log(showAddress())


// Hoisting 

console.log('foo', foo);
var foo = 'foo'; // undefined


hello();


function hello() {
    bye()
    console.log('Hello');
    bye()
    function bye() {
        console.log('Bye')
    }
}

// bind()

let nameObj = {
    name: "Tony"
}
  
let PrintName = {
    name: "steve",
    sayHi: function () {

        console.log(this.name); 
    }
}
PrintName.sayHi(); // steve
console.log(PrintName.name); // steve
console.log(nameObj.name); // Tony

const sayHiBind = PrintName.sayHi.bind(nameObj); 
sayHiBind(); // Tony

// call()
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  const fname = person.fullName.call(person2);
  console.log(fname);


  
  // apply()
const personObj = {
    fullDetail: function(city, state) {
      return this.firstName + " " + this.lastName + " is from " + city + ", " + state;
    }
  }
  const person3 = {
    firstName:"John",
    lastName: "Doe"
  }

  
  // This will return "John Doe":
  const personDetail = personObj.fullDetail.apply(person3, ["Des Plaines", "IL"]);
  console.log(personDetail);







  // CLOSURE()
  function outerFunction() {
    const outerVariable = "I am from outerFunction";
    
    function innerFunction() {
    console.log(outerVariable);
    }
    return innerFunction; // Return the inner function
    }
    const closure = outerFunction(); // Execute outerFunction and store its inner function in 'closure'
    closure(); // Call the inner function
    // Output: "I am from outerFunction"
    



    // IIFE

    (function () {
        
        console.log('i am an iife');
    }) ();

    (function (a, b) {
        console.log(a + b)
    }) (5, 10); // 15


    //CURRING
    function add(a) {
        return function(b) {
            return a + b;
        };
    }
    
    const addFive = add(5);
    console.log(addFive(3)); // Output: 8 (5 + 3)

    // different example
    function add(a, b,) {
        return a + b 
    }
    function curryAdd(a) {
        return function (b) {
        return a + b;
        };
    }
        console.log(add(2, 3))
        console.log(curryAdd(2)(3))