// Operator precedence

/* var hello = 10;

console.log(hello);

var num = 5 + 10 * 2;
var num1 = (5 + 10) * 2;

console.log(num);
console.log(num1);


// Modular divide or remainder divide
let modNum = 11 % 2; // Modular divide only outputs the remainder of the value
console.log(modNum);

let modNum1 = 19 % 4;
// ^^ 4 goes in to 19, four times. 4*4 = 16 12 with a remainder of 3
console.log(`${modNum1}`);

// using ` add strings and variables together
console.log(`The number is ${modNum}.`);

console.log(`The number is ${modNum}.`);

console.log("The number is " + modNum);


console.log(`The number is ${modNum + 1}.`);

console.log(`The number is ${modNum + 1 }.`);

*/


// Shorthand Operators

let shortjs = 4;
let num = 10;
// Adding a variable and making it equal to a variable
// price = price * discount
shortjs = shortjs + 5;
console.log(shortjs);


let price = 4;
let num1 = 10;
console.log(`Before price is ${price}.`);

// price = price + 5; is the same as price += 5;

price += 5;
console.log(`After price is ${price}.`);

// Comparison
num = 5;
num2 = 3;

console.log(num == num2); // == comparing value. will return a boolean

num = 5;
num2 = '5';
console.log(num == num2); // Value returns true because it is comparing the equality of two operands

console.log(num === num2);

let x = 5;
let y = 7;

t = 'Hello' += 'World';

console.log(t);