// Check Character Between 2nd and 4th Positions in String

// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

// The program checks if a specified character is present in a given string between the 2nd and 4th positions (i.e., indices 1 to 3). It returns true if the character exists in that range and false otherwise.

const str1= "Dhihendra";
const findChar = "h";
const newStr = str1.slice(1,4);

if(newStr.includes(findChar)) {
    console.log("true");
} else {
    console.log("false");
    
}

// Using function

const char = function(str) {
    const findChr = "h";
    const resultStr = str.slice(1,4);
    if(resultStr.includes(findChr)) {
        return true;
    } else {
        return false;
    }
}

console.log(char("Dhirendra"));
