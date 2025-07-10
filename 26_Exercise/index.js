// Check if Last Digit of Three Integers is Same

// Write a JavaScript program that checks whether the last digit of three positive integers is the same.

// The program compares the last digits of three given positive integers. It returns true if all three integers share the same last digit, and false otherwise.

const num1 = 70;
const num2 = 60;
const num3 = 400;

if(num1%10 === num2%10 && num2%10 === num3%10) {
    console.log("true");
    
} else {
    console.log("false");
    
}

// using function

const newInteger = function(a,b,c) {
    if(a%10 === b%10 && b%10 === c%10 && c%10 === a%10) {
        return true;
    } else {
        return false;
    }
}

console.log(newInteger(10,30,300));  // true
console.log(newInteger(22,23,10));  // false




