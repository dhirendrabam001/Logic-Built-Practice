// Check Rightmost Digits of Three Numbers

// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// This JavaScript program checks whether from three given non-negative integers, two or all of them have the same rightmost digit. It examines the last digit of each number and compares them to determine if they match, returning true if there's a match and false otherwise.


// const n1 = 10;
// const n2 = 20;
// const n3 = 31;
// const result1 = n1.toString().slice(-1);
// console.log(result1);
// const result2 = n2.toString().slice(-1);
// console.log(result2);
// const result3 = n3.toString().slice(-1);
// console.log(result3);

// if(result1 === result2 && result2 === result3 || result1 === result2 || result2 === result3 || result3=== result1) {
//     console.log("true");
    
// } else {
//     console.log("false");
    
// }

// Using function
const lastResult = function(a,b,c) {
    const n1 = a.toString().slice(-1);
    const n2 = b.toString().slice(-1);
    const n3 = c.toString().slice(-1);
    if(
        n1===n2 && n2 === n3 ||
        n1 === n2 || 
        n2 === n3 ||
        n3 === n1
    ) {
        return true;
        
    } else {
        return false;
    }
}
console.log(lastResult(20,20,40));
console.log(lastResult(25,32,55));
console.log(lastResult(1,2,3));


