/*
* ACCESSING A DOM ELEMENTS
*/

// getElementsById() - method

const pageHeading = document.getElementById('page-heading');
console.log(pageHeading); // node, element
console.log(typeof pageHeading); // object

const subHeading = document.getElementById('subHeading');
console.log(subHeading) // node

// getElemntByClassName() - method

const container = document.getElementsByClassName('container');
console.log(container); // HTML Collection (think of it as an array)

for(let i= 0; i< container.length; i++) {
    console.log(container[i])
}
console.log('-------------')
// Manually 
const firstContainer = container[0];
const firstContainer2 = container[2];
const firstContainer3 = container[3];

console.log(firstContainer);
console.log(firstContainer2);
console.log(firstContainer3);



// getElemeentsByTagName() -method

const image = document.getElementsByTagName('img');
console.log(image); //HTML COllection 

for(let i= 0; i < image.length; i++) {
    console.log(image[i])
}

// querySelector() - method

const par1 = document.querySelector('#par1'); // by using id
const par2 = document.querySelector('.par2'); // by using class
const section = document.querySelector('section'); // tagname

console.log(par1);
console.log(par2);
console.log(section);

// querySelectorAll

const allImages = document.querySelectorAll('img');
console.log(image);