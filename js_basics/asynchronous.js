

// Synchronous Code Example
for (let i=1; i <= 4; i++) {
    console.log(`Iteratiom: ${i}`)
}




function start() {
    console.log('start');
}

function inProgress() {
    
setTimeout(() => {
    console.log('inProgress');
}, 5500) // it runs late for example 1 sec is 1000,
}

function end() {
    console.log('end');
}

start();
inProgress();
end();

setTimeout(() => {
    // do stuff
    // code inside will be executed 1 second delayes
}, 1000)

//Callback

//you can use callback in two ways
[1,2,3].map((num) => num * 2); // first way

// second way: 
function start() {
    console.log('start');
}

function inProgress(callback) {  
setTimeout(() => {
    console.log('inProgress');

    callback()
}, 1000) // it runs late for example 1 sec is 1000,
}

function end() {
    console.log('end');
}

start();
inProgress(end);


//Async CA,lback Example

function downloadImage(url, theCallback) {
    setTimeout(() => {
        console.log(`Downloading image from ${url}`);
        theCallback(url);
    }, 3000)
}
const url1 = 'https://example.com/1.jpg';
downloadImage(url1, (myUrl) => {
    console.log(`Processing image from ${myUrl} ...`)
});

// Promises

// Creat a simple promise

const myPromise = new Promise((resolve, reject) => {
    resolve('Fullfilled');
    reject('Failed')
});

console.log(myPromise);

// Async and await keyword

async function getData() {
    return 'Some Data'
}

console.log(getData())