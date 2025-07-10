// Flatten an array of arrays

// Given: [[1, 2], [3, 4], [5]]

// Task: Use reduce to flatten into [1, 2, 3, 4, 5].
const givenArray2 = [[1,2], [3,4], [5]];
const newArray = givenArray2.flat();
console.log(newArray);


const givenArray = [[1,2], [3,4], [5]];
const result = givenArray.reduce((accu,current) => {
    return accu.concat(current);
});

console.log(result);

