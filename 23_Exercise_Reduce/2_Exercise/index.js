// Find the longest word

// Given: ["apple", "banana", "cherry", "date"]

// Task: Use reduce to return the longest word.

const givenArray = ["appleeee", "bananaaaaaa", "Cherry", "date"];

const result = givenArray.reduce((long,current) => {
    return current.length>long.length ? current: long;
})
console.log(result);
