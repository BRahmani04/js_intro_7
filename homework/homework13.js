
console.log("\n Task 01 \n")
/*
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
 Examples:
countVC("Hello")​             		-> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​             	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​           	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0}
*/

const countVC = string => {
    countVo = 0
    countC = 0
    for(const str of string.toLowerCase()) {
        if ((str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) && 'aeoui'.includes(str))
        countVo++
    else if ((str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) && !'aeoui'.includes(str))
    countC++
    
}
return `{vowels:${countVo}, consonants:${countC}}`
}
console.log(countVC("Hello"))
console.log(countVC("Programming"))
console.log(countVC("123Abc"))
console.log(countVC("123!@#xyz"))
console.log(countVC(""))


console.log('\n Task 02 \n')
/*
Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category
 Examples:
countChars("Hello")​                         	-> {letters: 5}
countChars("Programming 123")​ 	-> {letters: 11, numbers: 3}
countChars("123AbC!@#")​             	-> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​             	-> {numbers: 10}
countChars("     ")​                                	-> {}
countChars("")​                                     	-> {}
*/

const countChars = string => {
    
     let result = {
        countL: 0,
        countN: 0,
        countS: 0
    }
    
    for(const str of string.toLowerCase()){
        if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122)
       result.countL++
    else if ('0123456789'.includes(str))
        result.countN++

    else if (str !== ' ')
    result.countS++
}
return result
}

console.log(countChars('Hello'))
console.log(countChars('Programming 123'))
console.log(countChars('123AbC!@#'))
console.log(countChars('0987654321'))
console.log(countChars('     '))
console.log(countChars(''))


console.log('\n Task 03 \n')
/*
Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
Examples:
maxOccurrences("Hello")             -> "l"
maxOccurrences("Occurrences")  -> "c"
maxOccurrences("    ab    ")      -> "al"
maxOccurrences("12   3   21")    -> "1"
maxOccurrences("      ")      -> ""
maxOccurrences("")    -> ""
*/




console.log(maxOccurrences("Hello"))
console.log(maxOccurrences(""))
console.log(maxOccurrences("Occurrences"))
console.log(maxOccurrences("    ab    "))
console.log(maxOccurrences("12   3   21"))
console.log(maxOccurrences("      "))
console.log(maxOccurrences(""))




console.log('\n Task 04 \n')

/*
Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd")  -> "ad"
starOut("ab**cd")  -> "ad"
starOut("xm*sm*sy")  -> "xy"
starOut("abc")     -> "abc"
starOut("***")    -> ""
starOut("   ")      -> "   "
starOut("")    -> ""
*/

const starOut = string => {
    for (const el of string.split(' ')) {
        if (el.includes('*'))
            return el.replaceAll('*', '').slice(0, 1) + el.replaceAll('*', '').slice(-1)

    }
    return string
}
console.log(starOut("ab*cd"))
console.log(starOut("ab**cd"))
console.log(starOut("xm*sm*sy"))
console.log(starOut("abc"))
console.log(starOut("***"))
console.log(starOut("   "))
console.log(starOut(""))


console.log('\n Task 05 \n')

/*

Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. A roman 
numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I")  -> 1
romanToInt("IV")  -> 4
romanToInt("CXII")  -> 112
romanToInt("MMM")  -> 3000
romanToInt("MMMDCCCLXXXVIII")   -> 3888
romanToInt("MDCLXVI")    -> 1666
*/

const romanToInt = (string) => {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let num = 0;
    for (let i = 0; i < string.length; i++) {
        const curr = roman[string[i]]
        const next = roman[string[i + 1]]
        if ((curr < next))
            (num -= curr)
        else if (num += curr);
    }
    return num
}

console.log(romanToInt("I"));
console.log(romanToInt("IV"));
console.log(romanToInt("CXII"));
console.log(romanToInt("MMM"));
console.log(romanToInt("MMMDCCCLXXXVIII"));
console.log(romanToInt("MDCLXVI"));
console.log(romanToInt("IX"));
console.log(romanToInt("IXX"));



