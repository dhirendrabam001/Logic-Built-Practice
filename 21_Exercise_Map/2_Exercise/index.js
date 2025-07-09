// Capitalize each name

// Given: ["john", "jane", "jim"]

// Task: Return ["John", "Jane", "Jim"]

const givenArray = ["john", "jane", "jim"];

const resultArray = givenArray.map((capital) => {
    return capital.charAt(0).toUpperCase() + capital.slice(1);
});
console.log(resultArray);


