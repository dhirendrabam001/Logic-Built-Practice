// Check if Only One Integer is Multiple of 7 or 11

// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

// This JavaScript program examines two non-negative integers to determine if exactly one of them, but not both, is a multiple of 7 or 11. If only one of them satisfies this condition, it returns true; otherwise, it returns false.

const num1 = 7;
const num2 = 8;

const num1Mul = (num1%7 ===0) || (num1%11 ===0);
const num2Mul = (num2%7===0) || (num2%11 ===0);

if(num1Mul!== num2Mul) {
    console.log("true");
    
} else {
    console.log("false");
    
}
// using function

const resultInfo = function(a,b) {
    const aMul = (a%7===0) || (a%11 === 0);
    const bMul = (b%7===0) || (b%11 ===0);

    if(aMul!== bMul) {
        return true;
    } else {
        return false;
    }
}

console.log(resultInfo(7,20)); // true
console.log(resultInfo(14,22)); // false bcuz both condition are true ! return false
console.log(resultInfo(8,9)); // false not match 


