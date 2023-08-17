let day = 8;

if (day === 0) console.log("Today is Sunday");
else if (day === 1) console.log("Today is Monday");
else if (day === 2) console.log("Today is Tuesday");
else if (day === 3) console.log("Today is Wednesday");
else if (day === 4) console.log("Today is Thursday");
else if (day === 5) console.log("Today is Friday");
else if (day === 6) console.log("Today is Saturday");
else console.log("This number does not represent any day of the week!");

// Convert above task into swith statement

let randomNum;

switch (randomNum) {
    case 0:
        console.log("WEEKEND");
        break;
    case 1:
        console.log("WEEKDAY");
        break;
    case 2:
        console.log("WEEKDAY");
        break;
    case 3:
        console.log("WEEKDAY");
        break;
    case 4:
        console.log("WEEKDAY");
        break;
    case 5:
        console.log("WEEKDAY");
        break;
    case 6:
        console.log("WEEKEND");
}

// OR

let randomNum;

switch (randomNum) {
    case 0:
    case 6:
        console.log("WEEKEND");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("WEEKDAY");
        break;
        default:
            console.error("This number dose not represent any day of the week!")
}