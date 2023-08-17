
// Replacing strings

let str = "Can I can a can";
console.log(str.replace("can", "AAA")); // Can I AAA a can
console.log(str.replace(str, "***")); // ***
console.log(str.replaceAll("can", "AAA")); // Can I AAA a AAA

// TRICKY PART
console.log(str.replace("cani", "AAA")); // its basically the same because we dont have cani in a sentence
