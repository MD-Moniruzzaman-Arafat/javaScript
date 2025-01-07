// first class functions

function add(a, b) {
    return a + b;
}

// function can be stored in a variable
var sum = add;
console.log(sum(10, 20)); // 30

// function can be stored in an array
var arr = [];
arr.push(add);
console.log(arr[0](10, 20)); // 30

// function can be stored in an object

var obj = {
    sum: add
}

// we can create function as needed

setTimeout(function () {
    console.log("This is a function");
}, 1000);

// we can pass function as an argument

// we can return function from another function

