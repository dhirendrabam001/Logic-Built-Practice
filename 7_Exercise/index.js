// Check if One Integer is Positive and One is Negative

// Write a JavaScript program to check two given integers whether one is positive and another one is negative.
// This JavaScript program checks two given integers to determine if one is positive and the other is negative. It utilizes conditional statements and logical operators to evaluate whether one integer is greater than zero (positive) and the other is less than zero (negative), returning true if both conditions are met and false otherwise.

// const n1 = 10;
// const n2 = -20;
// if(n1>0 && n2<0) {
//     console.log("positive number");
// } else {
//     console.log("other negative");
    
// }

const integerNum = function(n1,n2) {
    if(n1>0 && n2<0 || n1<0 && n2>0) {
        return true
    } else {
        return false
    }
}
console.log(integerNum(2,2)); // two positive condtion and return false
console.log(integerNum(-2,2)); // one positive and other negative condition true
console.log(integerNum(2,-2)); //one positive and other negative condition true
console.log(integerNum(-2,-2)); // two condition are negative and true and return false condition




