
// regular object
let person = {
    name : "Alex",
    age: 28
};



console.log(person); // object
console.log(typeof person); // object
console.log(person.name); // Alex
console.log(person.age); // 28

// logic to send this person object to server

let formatedPerson = JSON.stringify(person);
console.log(formatedPerson); // string
console.log(typeof formatedPerson); // string
console.log(typeof formatedPerson.name); // undefined
console.log(typeof formatedPerson.age); // undefined

// JSON.aprse() -> converts JSON format to object

const data = '{"name": "Alex", "age": 28}' //JSON

const convertedData = JSON.parse(data);
console.log(convertedData); // {"name": "Alex", "age": 28}
console.log(typeof convertedData); // object
console.log(convertedData.name); // alex
console.log(convertedData.age); // 28

//JSON.stringify(object, fun)

let person2 = {
    name: 'Alex',
    age: 28
};
console.log(person2);

const OnlyNameJSON = JSON.stringify(person2, (key, value) => {
    console.log("key", key);

    if(key === "age" && value < 30) {
        return undefined;
    }
    return value;
})
console.log(OnlyNameJSON);

// Pass that second argument as an array
const keys = ['name', 'age', 'email'];
const OnlyNameJSON2 = JSON.stringify(person2, keys);
console.log(OnlyNameJSON2);