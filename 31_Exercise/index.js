// Return 30, 40, or 20 Based on Same Numbers

// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

// This JavaScript program checks a set of three numbers. If all three numbers are the same, it returns 30. If two numbers are the same, it returns 40. Otherwise, it returns 20

const finalResult = function(a,b,c) {
    if(
        a === b &&
        b === c &&
        c ===a
    ) {
        return 30
    }
    if(a===b || b === c || c === a) {
        return 40;
    }
    else {
        return 20;
    }
}
console.log(finalResult(10,10,10)); // 30
console.log(finalResult(20,30,30)); // 40
console.log(finalResult(2,3,5)); // 20


