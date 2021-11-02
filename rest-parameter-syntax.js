/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */
// Rest Parameter Syntax works in the opposite  direction from the spread operator.  
// Where the spread operator can break an array into  its individual elements, the rest parameter syntax  
// combines individual elements into an array. It can  also be used to represent the “rest” of the values  


// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("sum:", sum);

// Extra arguments are ignored - as only 3 defined in sumAll
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("sum2:", sum2);

// Function using ...rest - will now be four paramaters.  rest allows extra parameters to be passed to the
// the function into a new parameter called 'rest' which will become an array within the function
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}
let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("sum3:", sum3);

