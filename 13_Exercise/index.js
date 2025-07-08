
// Find Largest of Three Integers

//Write a JavaScript program to find the largest of three given integers.

//This JavaScript program takes three integers as input and determines the largest among them. It compares the integers using conditional statements and returns the highest value.


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
