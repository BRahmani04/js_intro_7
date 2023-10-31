
// Double or tripple

function dt(str) {
    if(str.length % 2 === 0) return str + str + str
    return str + str
}

console.log(dt('Tech'));


//first and last

function fl(str) {
    if(str.includes(' ')) return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' ') + 1);
    return str + str
}

console.log(fl('i like js'));

//has vowel 

function hasVowel(str) {
    for(const word of str) {
        if('aeiou'.includes(word.toLowerCase())) return true
    }
    return false
}

console.log(hasVowel('abc'))

// START VOWEL

function sV(string) {
    return 'aeiou'.includes(string[0].toLowerCase())
}

console.log(sV('Apple'))

//Average Edges 

const aE = (n1,n2,n3) => (Math.max(n1,n2,n3) + Math.min(n1,n2,n3)) / 2

console.log(aE(10,13,20))