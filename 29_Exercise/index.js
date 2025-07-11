// Sum Two Integers and Return Based on Range

// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

// This JavaScript program calculates the sum of two given integers. If the sum falls within the range of 50 to 80 (inclusive), it returns 65; otherwise, it returns 80.

// const sum1 = 40;
// const sum2 = 30;

// const total = sum1 + sum2;
// console.log(total);
// if(total>=50 && total<= 80) {
//     console.log("65"); 
// } else {
//     console.log("80");
    
// }

// using function
const result = function(num1,num2) {
    const finalResult =  num1 + num2;
    if(finalResult>=50 && finalResult<=80) {
        return 65;
        
    } else {
        return 80
        
    }
}
       
console.log(result(40,20));
console.log(result(40,50));


                           