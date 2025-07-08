// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

// This JavaScript program creates a new string from a given string by taking its last three characters and appending them both at the front and back. It first checks if the length of the given string is three or more characters to ensure the operation is valid. Then, it extracts the last three characters and concatenates them with the original string, forming the desired result.


const a = 800;
const b = 600;
const c = 90;

if(a>b) {
    if(a>c)
        console.log(`${a} is this largest value`);
    else {
        console.log(`${c} is this largest value`);
    }
    
} else if(b>a){
    if(b>c){
        console.log(`${b} is this largest value`);
    } else{
        console.log(`${c} is this largest value`);
    }
}
else {
    console.log(`${c} is largest value`);
    
}
