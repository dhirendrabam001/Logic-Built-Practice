// Count how many times each letter appears

// Given: "hello" → ['h', 'e', 'l', 'l', 'o']

// Task: Use reduce to return { h: 1, e: 1, l: 2, o: 1 }.

const givenArray = ["h", "e", "l", "l", "o"];

const result = givenArray.reduce((accu,current) => {
    accu[current] = (accu[current] || 0) + 1;
    return accu;

}, {});
console.log(result);
