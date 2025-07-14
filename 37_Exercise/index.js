// Reverse a Given String

// Write a JavaScript program to reverse a given string.

// This JavaScript program reverses a given string. It iterates through the characters of the string from the last to the first and constructs a new string by appending each character in reverse order. Finally, it returns the reversed string.

const str1 = "Dhirendra";
const result = str1.split("");
console.log(result);
const reverseStr = result.reverse();
console.log(reverseStr);
const finalAns = reverseStr.join('');
console.log(finalAns);

// Using function

const mainInfo = function(str) {
    const res = str.split("");
    const res2 = res.reverse();
    const resFinal = res2.join("");
    return resFinal;
}
console.log(mainInfo("Dhirendra"));









