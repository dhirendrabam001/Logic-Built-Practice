// Check if Integer is 15, or Sum/Difference is 15

// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

// This JavaScript program evaluates two integer values to determine if either one is equal to 15 or if their sum or difference equals 15. If any of these conditions are met, it returns true; otherwise, it returns false.if

const num1 = 20;
const num2 = 5;

if(
    (num1 === 15) ||
    (num2 === 15) ||
    (num1 + num2 === 15) ||
    Math.abs(num1 - num2) === 15

) {
    console.log("true");
    
} else {
    console.log("false");
    
}
// Using function


const resultInfo = function(a,b) {
    if(
        a === 15 ||
        b === 15 ||
        a + b === 15 ||
        Math.abs(a - b) === 15
    ) {
        return true;
    } else {
        return false;
    }
}

console.log(resultInfo(10, 5)); // true
console.log(resultInfo(20,30)); // false
console.log(resultInfo(20,5)); // true



