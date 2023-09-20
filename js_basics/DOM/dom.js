// DOM

// Window object

console.log(window); // ReferenceError: window is not defined

// alert
//window.alert('Here is the alert message!');

//prompt

//let promptResult = window.prompt();
//console.log(promptResult); // null or some string


//confirm

//let confirmResult = window.confirm('Are you ready');
//console.log(confirmResult); // boolean value

//InnerWidth and innerHeight

//console.log(window.innerWidth);
//console.log(window.innerHeight);

//console.log('height', innerHeight);



//scrollTo(x, y);

//window.scrollTo(0, 0)// scroll page to the top 


// location - object

// window.location.reload(); // reloads page

//localStorage
console.log(window.localStorage.length); // 0 empty

// set item into localstorage

window.localStorage.setItem('name', 'John');
window.localStorage.setItem('isLoggedIn', false);
window.localStorage.setItem('userID', 1234);
window.localStorage.setItem('userInfo', JSON.stringify({ name: 'John', email: 'john@gmail.com' }));
window.localStorage.setItem('userWalletType', JSON.stringify(['apple', 'google', 'cc']));

// Get item from localStorage
console.log(window.localStorage.getItem('name'));
console.log(window.localStorage.getItem('isLoggedIn'));
console.log(window.localStorage.getItem('userID'));
console.log(JSON.parse(window.localStorage.getItem('userInfo')));
console.log(JSON.parse(window.localStorage.getItem('userWalletType')));

// removeItem from localStorage
window.localStorage.removeItem('name');

window.localStorage.clear(); // clear everything from localStorage

/*
Activity

1.Ask user a name => prompt()

2. Alert users name => alert()
3. Confirm if user wants to continue => confirm
    3.1 if user say 'Yes' => Alert 'you have chosen to continue'
    3.1 if user say 'No' => Alert 'you Canceld the action'

4. Console log users browser innerWidth and innerHeight
5. Reload the page after 10 sec and start again.


*/

let user = window.prompt('What is your name ')

if (user) {
    window.alert(`Your Name is ${user}`);

    const doesUserContinues = window.confirm('Do you want continue browsing on our webpage?');
    if (doesUserContinues) {
        window.alert('You have chosen to continue')
    } else {
        window.alert('You canceled the action')
    }

    const userInnerHeight = window.innerHeight;
    const userInnerWidth = window.innerWidth;

    console.log(`You device dimension are height : ${userInnerHeight} and width: ${userInnerWidth}`);

    const differentPage = window.confirm(`Do ypu want to go to Google.com`);

    
        if (differentPage) {
            window.open('url')
        }
    })
    else {
    console.log('Webpage will be reloaded in 10 sec')
    setTimeout(() => {
        window.location.reload()
    }, 10000)
}
        else {
    console.log('You didnt provide your name Bye Bye');
}




