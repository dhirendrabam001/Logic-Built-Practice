// Check if Number or Sum is 50
//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
//This JavaScript program checks a pair of numbers and returns true if one of the numbers is 50 or if their sum equals 50. It utilizes logical operators and conditional statements to evaluate the given conditions and return the appropriate result

// without function solutions

const number1 = 20;
const number2 = 30;
console.log("The result is:", number1==50 || number2 == 50 || (number1+number2 ==50)); //check the one condtion is true if one condition true return true otherwise false result


const checkNumber = function(a,b) {
    if(a == 50 || b == 50 || (a+b == 50)) {
        console.log("true"); 
    } else {
        console.log("false");     
    }
}
console.log(checkNumber(50,60)); //one condition true answer true
console.log(checkNumber(20,30)); // if sum two number condition true answer true
console.log(checkNumber(10,20)); // two condition false result also be false













