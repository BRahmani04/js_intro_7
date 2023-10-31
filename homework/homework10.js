/*
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
*/

console.log('\n Task 01 \n')

const calculateTotalPrice1 = (obj) => {
    const product = {
        apple: 2,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25,
    };
    let sum = 0;
    for (const prod in obj) {
        for (const price in product) {
            if (prod === price) sum += obj[prod] * product[price];
        }
    }
    return console.log(sum);
};
calculateTotalPrice1({ apple: 3, mango: 1 });
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }); 
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 });
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 });


console.log('\n Taski 02 \n')

const calculateTotalPrice2 = (obj) => {
    const product = {
        Apple: 2,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25,
    };
    let sum = 0;
    for (const prod in obj) {
        for (const price in product) {
            if (prod === "Apple" && obj[prod] >= 2 && prod === price && prod) {
                if(obj[prod] % 2 === 0) sum += ((obj[prod] * product[price]) / 2) + ((obj[prod] * product[price])/ 2)/2
                else sum += (((obj[prod]+ 1) * product[price])/ 2) + (((obj[prod]-1)* product[price]) / 2)/2
            }
            else if (prod === "Mango" && obj[prod] >= 4 && prod === price && prod) sum += (obj[prod] * product[price]) - (4.99 * Math.floor(obj[prod] / 4))
            else if (prod === price) sum += obj[prod] * product[price];
            
        }
    }
    return console.log(sum);
};
calculateTotalPrice2({ Apple: 3, Mango: 5 });
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 });
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 });
calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 });

console.log('\n Task 03 \n')

const nthWord = (str, number) => {
    if(str.split(' ').length < number) return ''
    return console.log(str.split(" ")[number - 1])
}
nthWord("I like programming languages", 2);
nthWord("QA stands for Quality Assurance", 4)
nthWord("Hello World", 3)
nthWord("Javascript", 1) 
nthWord("", 1) 

console.log('\n Task 04 \n')

const isArmstrong = (num) => {
    const arNum = num.toString().split("");
    let armNum = 0;
    for(let number of arNum) {
        armNum += number ** arNum.length
    }
return console.log(num === armNum);
}
isArmstrong(153) 
isArmstrong(123) 
isArmstrong(1634) 
isArmstrong(153) 
isArmstrong(1111)



console.log('\n Task 05 \n')

    // I dont know how to resolve this problem 



    console.log('\n Task 06 \n')

    const doubleOrTriple = (arr, boolean) => {
        if(boolean === true) return arr.map(x => x * 2)
        else return arr.map(x => x * 3)
    }
    console.log(doubleOrTriple([1, 5, 10], true));
    console.log(doubleOrTriple([3, 7, 2], false));
    console.log(doubleOrTriple([-1, -2], true));
    console.log(doubleOrTriple([0], false));
    console.log(doubleOrTriple([-1, 0, 1], true));

    console.log('\n Task 07 \n')

    const splitString = (string, number) => {
        if (string.length % number !== 0) return ''
        else return string.slice(0, number) + ' ' + string.slice(number)
    }
    console.log(splitString("JavaScript", 5))
    console.log(splitString("Java", 2))
    console.log(splitString("Automation", 3))
    console.log(splitString("Hello", 6))
    console.log(splitString("12", 1))