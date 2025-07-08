//Check if Two Integers are in Range 50–99

//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

//This JavaScript program checks if either of two given integers falls within the range of 50 to 99 (inclusive). It uses conditional statements to evaluate whether each integer is within the specified range and returns true if at least one of them meets the condition.

const num1 = 58;
const num2 = 80;
if(num1>=50 && num1<=99 || num2>=50 && num2<=99) {
    console.log("true"); 
} else {
    console.log("false");
    
}

// Using function

const info = function(n1,n2) {
    if(n1>=50 && n1<=99 || n2>=50 && n2<=99) {
        return true;
    } else {
        return false;
    }
}
console.log(info(60, 70));

