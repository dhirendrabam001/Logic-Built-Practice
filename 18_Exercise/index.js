// Find Closest Value to 100 from Two Numbers

// Write a JavaScript program to find the closest value to 100 from two numerical values.
// This JavaScript program compares two numerical values and determines which one is closest to 100. It calculates the absolute difference between each value and 100, then returns the value with the smaller difference.

const closeNum = function (n1, n2) {
const value1 = Math.abs(100-n1);
const value2 = Math.abs(100-n2);
if(value1<value2) {
    return n1;
} else {
    return n2;
}
}
console.log(closeNum(90, 120));
