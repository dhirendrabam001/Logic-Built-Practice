// 4-Difference Between Number and 13

const differenceNumber = function(num) {

    if(num<=13) {
        return 13-num;

    } else {
        return(13-num) * 2;
    }

}
console.log(differenceNumber(10)); // true
console.log(differenceNumber(15)); // false



