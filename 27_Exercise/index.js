// Modify String Based on Length (First 3 Lowercase/Uppercase)

// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

// The program converts the first three characters of a given string to lowercase if the string length is 3 or more. If the string length is less than 3, it converts the entire string to uppercase.



const mainInfo = function(str) {
    if(str.length<3) {
        console.log(str.toUpperCase());    
    }
        const frontResult = (str.slice(0,3)).toLowerCase();
        const backResult = str.substring(3, str.length);
        return frontResult + backResult;  
    }
console.log(mainInfo("He"));



