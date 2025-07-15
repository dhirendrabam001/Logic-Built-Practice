// Check 'a' and 'b' Separated by Exactly 3 Places

// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// This JavaScript program scans a given string to determine if the characters 'a' and 'b' are separated by exactly three characters. It iterates through the string, checking the positions of 'a' and 'b' to ensure they meet the specified separation condition.

const finalRes = function (str) {
    for (i = 0; i <str.length - 4; i++) {
        if (str[i] === "a" && str[i + 4] === "b") {
            return true;
        }
        if (str[i] === "b" && str[i + 4] === "a") {
            return true
        }
        
    }
    return false;

}
console.log(finalRes("dhirendra"));
console.log(finalRes("dihrandrba"));
console.log(finalRes("hello world"));





