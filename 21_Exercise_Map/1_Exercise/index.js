// Square each number
// Given: [2, 4, 6, 8]

// Task: Return a new array with squares of each number.

const givenArray = [2,4,6,8];
const resultArr = givenArray.map((square) => {
    return square * 2;
})

console.log(resultArr);
