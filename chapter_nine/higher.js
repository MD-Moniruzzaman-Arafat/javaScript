// higher order functions
// A higher-order function is a function that can take another function as an argument or that returns a function as a result.

// Example of a higher-order function
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const calculate = (fn, a, b) => {
    return fn(a, b);
}

console.log(calculate(add, 10, 20));
console.log(calculate(sub, 10, 20));