//Filter odd numbers, square them, and get the sum

// Given: [1, 2, 3, 4, 5]

// Task: First filter odd numbers, then square them, then return the total.

const givenArray = [1,2,3,4,5];

const result = givenArray.filter((sum) => {
      if(sum%2!==0) {
        return sum; 
      }        
})

const result2 = result.map((num) => {
    return num * num;
})

const result3 = result2.reduce((accu,current) => {
    return current + accu;
}, 0)

// console.log(result);
// console.log(result2);
console.log(result3);


