// Log even or odd

// Given: [1, 2, 3, 4, 5]

// Task: Print whether each number is even or odd.

const givenInfo = [1,2,3,4,5];
// let even = 2;
// let odd = 1;

givenInfo.forEach((result) => {
    if(result%2==0) {
        console.log("Even number is:",result);
    } else {
        console.log("Odd Number is:", result);
        
    }
})


