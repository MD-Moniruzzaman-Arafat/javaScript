// Pure functions
// A pure function is a function which:
//     Given the same input, will always return the same output.
// Produces no side effects.

// Example of a pure function
const add = (a, b) => a + b;
console.log(add(10, 20)); // 30
console.log(add(10, 20)); // 30

// Example of a non - pure function
let result = 0;
const add2 = (a, b) => {
    result = a + b;
    return result;
}
console.log(add2(10, 20)); // 30
