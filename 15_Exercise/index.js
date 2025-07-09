// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

//This JavaScript program checks whether a given string starts with 'Java'. It uses a method to determine if the string begins with the specified substring 'Java'. If the string starts with 'Java', it returns true; otherwise, it returns false. This approach efficiently handles the comparison, providing a clear and concise solution.

const str = "JavaScript";
const result = str.substring(0,4)
console.log(result);

if(result.startsWith("Java")) {
    console.log("true"); 
} else {
    console.log("false");
    
}

// with using function
const mainStr = function(str1) {
    const beginStr = str.substring(0,4);
    console.log(beginStr);
    if(str.startsWith("Java")) {
        return true;
    } else {
        return false;
    }
}
console.log(mainStr("JavaScript"));
