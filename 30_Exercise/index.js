// Check if Integer is 8 or Difference/Sum Equals 8

// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

// This JavaScript program checks two given integers to see if one of them is 8 or if their sum or difference is 8. If any of these conditions are met, it returns true; otherwise, it returns false.
const num1 = 12;
const num2 = 4;

if(
    num1===8 ||
    num2 ===8 ||
    num1 + num2 === 8 ||
    Math.abs(num1-num2) ===8
) {
    console.log("true");
    
} else {
    console.log("false");
    
}

// using function

const mainResult = function(n1,n2) {
    if(
        n1 === 8 ||
        n2 === 8 ||
        n1 + n2 === 8 ||
        Math.abs(n1-n2)
    ) {
        return true;
    } else {
        return false;
    }
}

console.log(mainResult(8,8));
