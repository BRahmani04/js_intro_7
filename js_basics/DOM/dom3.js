// import all elements

const parentElement = document.getElementById('parent');
console.log(parentElement)
// Get all the child nodes or children of parentElement
const childLIs = parentElement.childNodes;
console.log(childLIs);

const children = parentElement.children;
console.log(children);

//IF you have get nodes and extra informations like text use childNodes. else use children

//Get Parent element
const countriesHeading = document.getElementById('countries')
const parentHeading = countriesHeading.parentElement;
console.log(parentHeading);

// Get first and last child

const firstLi = parentElement.firstChild;
const lastLi = parentElement.lastChild;
console.log(firstLi); // gives text
console.log(lastLi); // givees text

const firstLiElement = parentElement.firstElementChild;
const lastLiElement = parentElement.lastElementChild;
console.log(firstLiElement); // gives USA
console.log(lastLiElement); //  gives Germany

// Get Sibling elements

const leftSibling = firstLiElement.previousElementSibling;
console.log(leftSibling); // null

const rightSibling = firstLiElement.nextElementSibling;
console.log(rightSibling) // Nigeria

const leftSiblingOfLast = lastLiElement.previousElementSibling;
console.log(leftSiblingOfLast) // Japan

const rightSiblingofLast = lastLiElement.nextElementSibling;
console.log(rightSiblingofLast) // null

// Node attributes
// - getAttribute
// - setAttribute

const container = document.querySelector('.container');
// const images = documnet.querySelectorAll('img')
const images = container.children;

const firstImage = images[0];
// get src of image element
console.log(firstImage.src); // url
console.log(firstImage.alt);// alt text

const newUrl = 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80'
// update src of first image
firstImage.src = newUrl;
console.log(firstImage);

// getAttribute

const imgUrl = firstImage.getAttribute('src');
console.log(imgUrl === newUrl); // true

// setAttribute
firstImage.setAttribute('alt', 'Beautiful Nature');
const altText = firstImage.getAttribute('alt'); // 'Beautiful Nature'
console.log(altText === 'Beautiful Nature'); // true

// Styling

const bodyEl = document.querySelector('body');
console.log(bodyEl);

//change bg color of body element
bodyEl.style.backgroundColor = 'Lightgray';
// align elements inside body to center
bodyEl.style.textAlign = 'center';

for (let i = 0; i < images.length; i++) {
    let imageEl = images[i];

    //style image element
    imageEl.style.width = '250px';
    imageEl.style.height = '150px';
    imageEl.style.border = '4px solid green';

    if (i > 1) {
        imageEl.style.border = '4px solid blue';
    }

}

// className vs classList

const boxEl = document.querySelector('.box');
console.log(boxEl.className);
console.log(boxEl.classList);

//boxEl.className = 'box2'; // this will wipe everything and just insert box2
boxEl.className += 'box2'; // use this if you need to append extra class name


boxEl.classList.add('box3'); // this will add box3 to existing class names
boxEl.classList.remove('box'); // this will remove box from existing class names

// innerHTML

// bodyEl.innerHTML = '';


// ADD HTML INTO DOM

parentElement.innerHTML += ` <li>France</li> `

// Create an element 

const p2 = document.createElement('p');
console.log(p2);
// add content to it 
p2.innerHTML = 'Box 2';
console.log(p2);

// 2nd way
//const textNode = document.createTextNode('Box 3');
//p2.appendChild(textNode);
//console.log(p2);

// Append p2 to box element
boxEl.append(p2);

//append -> takes node or text strings
// appendChild -> only takes text(string)

/*
    Activity

    TODO List
    1. Ask user a list

    2. Create an element based on users input

    3. Show that in the DOM(UI)

    Bonus: Ask 3 lists from user
*/

let first = prompt('First to do list');
let second2 = prompt('Second to do list');
let third3 = prompt('Third to do list');

let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.textContent = first;

let li2 = document.createElement('li');
li2.textContent = second2;

let li3 = document.createElement('li');
li3.textContent = third3;

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);


