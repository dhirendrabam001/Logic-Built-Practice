// Check if Two Numbers are in Specific Ranges

// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
// This JavaScript program checks if two given numbers fall within either the range 40 to 60 or the range 70 to 100, inclusive. It returns true if both numbers fall within any of these ranges, and false otherwise.

const num1 = 50;
const num2 = 80;

if((num1>=40 && num1<=60) || (num2>=70 && num2<=100)) {
    console.log("true");
} else {
    console.log("false");
    
}


// Using function solution
const newNum = function(n1,n2) {
    if((n1>=40 && n1<=60) || (n2>=70 && n2<=100)) {
        return true;
    } else {
         return false;
    }
}
console.log(newNum(55, 88));
