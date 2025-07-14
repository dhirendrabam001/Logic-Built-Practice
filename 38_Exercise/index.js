// Capitalize First Letter of Each Word in String

// Write a JavaScript program to capitalize the first letter of each word in a given string.

// This JavaScript program capitalizes the first letter of each word in a given string. It splits the string into words, capitalizes the first letter of each word, and then joins the words back into a single string.

const str = "hello dhirendra what are you doing";

const words = str.split(" ");
let result = "";
for(i=0; i<words.length; i++) {
    const word = words[i];
    const capital = word.charAt(0).toUpperCase() + word.slice(1);
    result += capital + " ";
 
}
console.log(result.trim());


