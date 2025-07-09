// Extract first letter

// Given: ["apple", "banana", "cherry"]

// Task: Return ["a", "b", "c"]

const givenArray = ["apple", "banana", "cherry"];

const result = givenArray.map((extract) => {
    return extract.charAt(0);
})
console.log(result);
