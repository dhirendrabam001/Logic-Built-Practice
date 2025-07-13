// Check if Integer is in Range 40–10,000

// Write a JavaScript program to check whether a given number exists in the range 40..10000.
// For example 40 presents in 40 and 4000.

// This JavaScript program verifies whether a given number falls within the inclusive range of 40 to 10,000. It checks if the number is greater than or equal to 40 and less than or equal to 10,000. If the number satisfies this condition, it returns true; otherwise, it returns false.

const n1 = 100;
const n2 = 50;

const n1Check = (n1>=40) && (n1<=10000);
const n2Check = (n2>=40) && (n2<=10000);

if(n1Check && n2Check) {
    console.log("true");
    
} else {
    console.log("false");
    
}
 
const resultInfo = function(a) {
    if(a>=40 && a<=10000) {
        return true;
    } else {
        return false;
    }
}
console.log(resultInfo(60));
console.log(resultInfo(20));
console.log(resultInfo(30));

