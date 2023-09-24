// DOM EVENts
/*
const clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click',  (event) => {
    console.log(event.target);
    console.log('You Clicked!', event.target);
});


// doubleclickbutton

const doubleclickBtn = document.getElementById('doubleclickBtn');

doubleclickBtn.addEventListener('dblclick', (event) => {
    console.log('You double clicked =>', event.target);
});

// mousedown

const mousedownBtn = document.getElementById('mousedownBtn');

mousedownBtn.addEventListener('mousedown', (event) => {
    console.log('You pressed down =>', event.target);
});

// mouseup

const mouseupBtn = document.getElementById('mouseupBtn');

mouseupBtn.addEventListener('mouseup', (event) => {
    console.log('You pressed up =>', event.target);
});

// mousemove

const mousemoveBtn = document.getElementById('mousemoveBtn');

mousemoveBtn.addEventListener('mousemove', (event) => {
    console.log('You moving to button =>', event.target);
});

// 2. Keyword Events
const body = document.querySelector('body');

// keydown
body.addEventListener('keydown', (event) => {
    // if(event.key === 13)
    console.log('Keydown event =>', event.target);
});

//keyUp


body.addEventListener('keyup', (event) => {
    console.log('Keyup event =>', event.target);
});

// keypress

body.addEventListener('keypress', (event) => {
    console.log('Keypress event =>', event.target);
});

*/
// FORM EVENTS

const changeInput = document.getElementById('changeInput');

changeInput.addEventListener('change', (event) => {
    //event.target.value => whatever user types on input
    console.log(event.target.value)
})

// input

const InputInput = document.getElementById('InputInput');

InputInput.addEventListener('input', (event) => {
    //event.target.value => whatever user types on input
    console.log(event.target.value)
})



/// FOCUS

const formInput = document.getElementById('formInput')
formInput.addEventListener('focus', (event) =>{
    let element = event.target
    element.style.backgroundColor = 'darkred'
    element.style.color = 'white'
})
formInput.addEventListener('blur', (event)=>{
    let element = event.target
    element.style.backgroundColor = ''
    element.style.colot = ''
})

//SUBmit


const formEl = document.querySelector('form')
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form Successfully submitted');
    console.log({
        name: 'Joe',
        email: 'joe@gmail.com'
    });
})

/*
const formEl = document.querySelector('form')
formEl.addEventListener('keypress', (event) => {
    event.preventDefault();
    console.log('Form Successfully submitted');
    console.log({
        name: 'Joe',
        email: 'joe@gmail.com'
    });
})
*/


// WINDOW EVENT

//scroll

window.addEventListener('scroll', (event) => {
    console.log(('You are scrolling the page'))
    console.log((`And your coordinates are X: ${window.scrollX} and Y: ${window.scrollY}`))
})

/*
Activity: Todo list

    Step 1: Create an input to take a list

    Step 2: Either keypress or submit 

    Step 3: Show that list in the UI
*/

