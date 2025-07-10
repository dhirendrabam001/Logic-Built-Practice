// Given: [5, 10, 15]

// Task: Use reduce to return the total sum.

const givenArray = [5,10,15,20,25];

const result = givenArray.reduce((total,sum) => {
    return total + sum;
});
console.log(result);


