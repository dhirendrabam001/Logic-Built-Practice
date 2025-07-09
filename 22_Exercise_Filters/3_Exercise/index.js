// Filter words longer than 5 letters

// Given: ["apple", "banana", "fig", "pineapple"]

// Task: Return words with more than 5 characters.

const givenArray = ["apple", "banana", "fig", "pineapple", "Dhirendra"];
const result = givenArray.filter((str) => {
    if(str.length>5) {
        return str;
    }
})
console.log(result);
