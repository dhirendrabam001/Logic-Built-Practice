// Sort Letters Alphabetically in String

// Write a JavaScript program to convert letters of a given string alphabetically.

// This JavaScript program takes a string and sorts its letters in alphabetical order. It splits the string into an array of characters, sorts the array, and then joins the sorted characters back into a string.

const str = "dhirendra";

const newStr = str.split("");
// console.log(newStr);

const result = newStr.sort();
const finalRes = result.join("")
console.log(finalRes);

// using function
const main = function(str1) {
    return str1.split("").sort().join();
}

console.log(main("dhirendra"));



