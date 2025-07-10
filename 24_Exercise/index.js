// Find Larger Number in Range 40–60
// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

// The JavaScript program finds the largest number between two given positive integers, ensuring both numbers are within the range of 40 to 60 inclusive. If both numbers are within the range, it returns the larger number; otherwise, it handles invalid input.

const num1 = 55;
const num2 = 54;
if(num1>=40 && num1<=60 && num2>=40 && num2<=60) {
    if(num1 === num2) {
        console.log("Number are same value"); 
    } else if(num1>num2) {
        console.log(`The largest number is: ${num1}`);
        
    } else {
        console.log(`The largest number is: ${num2}`);
    } 
} else {
    console.log("please fill the valid input");
}

// using function
const result = function(a,b) {
    if(a>=40 && a<=60 && b>=40 && b<=60) {
        if(a===b) {
            return "Returns value are same"        
        } else if(a>b) {
            return a;
        } else {
            return b;
        }
    } else {
        return "Valid input fill"
    }
}

console.log(result(50,45));
