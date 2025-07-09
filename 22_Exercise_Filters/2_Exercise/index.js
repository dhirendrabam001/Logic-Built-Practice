// Filter names starting with 'A'

// Given: ["Anna", "Alex", "Brian", "Amanda"]

// Task: Return only names that start with 'A'.

const givenArray = ["Alex", "Anna", "Brian", "Amanda", "Brain", "Apple"];
const result = givenArray.filter((str) => {
    if(str.charAt(0) === "A") {
        return str;
    }
})

console.log(result);
