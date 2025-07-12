// Evaluate if Integer is ≥20 and Less Than Another

// Write a JavaScript program that evaluates three given integers to determine 
// if any one of them is greater than or equal to 20 and less than the other two.

const num1 = 25;
const num2 = 40;
const num3 = 50;

// Check each number:
// Is it ≥ 20 AND less than both of the other numbers?
const result =
  (num1 >= 20 && num1 < num2 && num1 < num3) ||
  (num2 >= 20 && num2 < num1 && num2 < num3) ||
  (num3 >= 20 && num3 < num1 && num3 < num2);

console.log(result); // Output: true or false


const resultInfo20 = function(n1,n2,n3) {
    if(
        (n1>=20 && n1<n2 && n2<n3) ||
        (n2>=20 && n2<n1 && n3<n2) ||
        (n3>=20 && n3<n1 && n1<n3)
    ) {
        return true;
    }
    else {
        return false;
    }
}

console.log(resultInfo20(30,40,12));
