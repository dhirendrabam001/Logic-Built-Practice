// Remove Character at Specified Position in String

//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
//This JavaScript program removes a character at a specified position in a given string and returns the modified string. It takes the position as input and removes the character at that position using string manipulation methods like substring() or slice(). Finally, it returns the modified string after removing the character at the specified position.

const str = "javascript";
const newStr = str.slice(2,4);
console.log(newStr);
console.log(str);

const newStr2 = str.substring(1,3);
console.log(newStr2);

