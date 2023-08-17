



// "Write a function that takes an argument and prints "Hello ${argument}"
function sayHello(a){
    console.log(`Hello ${a}`);
}


sayHello("Alex");
sayHello("Bali");
sayHello("igor");
sayHello(123);
sayHello("abc");

//Tricky part
sayHello("Ivan", "Yuliia");
sayHello();
sayHello("Alex, Igor, 123, abc, true");

//Write a function that takes 2 arguments and returns their sum"

function sum(x, y){
    return x + y;
   
}

console.log(sum(3, 7));

//OR

let variable = sum(3, 7);
console.log(variable);


