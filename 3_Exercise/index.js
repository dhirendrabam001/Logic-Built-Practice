//3-Sum Two Integer(Triple if equal)

const addTwoNum = function(num1,num2) {
    if(num1 == num2) {
        return 3* num1 + num2
    } else {
        return num1 + num2;
    }

}
console.log(addTwoNum(10,20)); // conslole if two sum is not equal
console.log(addTwoNum(30,30)); // return if two sum are equal


