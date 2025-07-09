// Given: [1, 2, 3, 4, 5, 6]

// Task: Return [2, 4, 6].

const givenArray = [1,2,3,4,5,6];

const result = givenArray.filter((num1) => {
    return num1%2 ===0;
})
console.log(result);
