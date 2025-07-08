// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

// This JavaScript program creates a new string from a given string by taking its last three characters and appending them both at the front and back. It first checks if the length of the given string is three or more characters to ensure the operation is valid. Then, it extracts the last three characters and concatenates them with the original string, forming the desired result.

const str1 = "Dhirendra";
if(str1.length>=3) {
    const takenLast = str1.slice(-3);
    const finalResult = takenLast + str1 + takenLast;
    console.log(finalResult);
    
}
 else {
    console.log("At least more than 3 character needed");
    
 }

//  Using function

const newStr = function(str) {
    if(str.length>=3) {
        const firstStr = str.slice(-3);
        const result = firstStr + str + firstStr;
        return result;
        
    } else {
        console.log("At least more than 3 character needed");
        
    }
    
}
console.log(newStr("Dhirendra"));
console.log(newStr("D"));






