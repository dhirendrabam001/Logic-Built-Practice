// Remove 'Script' from String at 5th Position

//Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

//This JavaScript program checks if the substring "Script" appears at the 5th position (index 4) in a given string. If "Script" is found at the specified position, it returns the string with "Script" removed; otherwise, it returns the original string.

const myString = "JavaScript";
const mainString = myString.substring(4, 10);

if(mainString === "Script") {
    console.log("Scirpt");
}
else {
    console.log("JavaScript");
    
}

// Using function
const stringInfo = function(str) {
    if(str.substring(4,10) === "Script") {
        return str.substring(0,4) + str.substring(10);
        } else {
            return str;
        }
}

console.log(stringInfo("JavaScript"));







