// Difference Between Number and 19 (Triple if >19)
// This JavaScript program computes the absolute difference between a specified number and 19. If the specified number is greater than 19, it returns triple the absolute difference. It utilizes conditional statements to check the given condition and perform the appropriate computation.

const numberDiff = function(num) {
    if(num<=19) {
        return num-19;
    } else {
        return 3 * (num-19)
    }

}
console.log(numberDiff(10)); // 9 output
console.log(numberDiff(30)); // 33 output

