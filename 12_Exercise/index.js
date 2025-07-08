// Check if Number is Multiple of 3 or 7

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
// This JavaScript program checks if a given positive number is a multiple of either 3 or 7. It uses the modulo operator (%) to determine if the number is divisible by 3 or 7 without any remainder. If the result is 0 for either operation, it means the number is a multiple of 3 or 7, respectively.

const numberInfo = function(num1,num2) {
    if(num1%3==0 || num2%7==0) {
        return true  
    } else {
        return false
    }
}
console.log(numberInfo(10,21));

const n1 = 20;
const n2 = 21;
if(n1%3==0 || n2%7==0) {
    console.log("This condition is true", n1,n2); 
} else {
    console.log("This condition is false", n1,n2);
    
}

