// Swap First and Last Characters in String

//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
//This JavaScript program creates a new string from a given string by swapping the positions of the first and last characters. It ensures that the length of the string is greater than or equal to 1 to perform the swap operation safely. By using string manipulation methods like charAt() and concatenation, it constructs the new string with the first and last characters swapped.

const first = function(str1) {
    if(str1.length<=1) {
        return str1;
    }
    const oneChar = str1.charAt(0);
    const middleC = str1.substring(1, str1.length -1);
    const lastChar = str1.length-1;
    const finalResult = oneChar+ middleC+ lastChar;
    return finalResult;
    
}
// const firstChar = str1.charAt(1)
// console.log(firstChar);

console.log(first("Dhirendra"));
console.log(first("B"));
console.log(first("Cd"));
