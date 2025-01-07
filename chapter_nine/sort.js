var person = [
    { name: 'John', age: 23 },
    { name: 'Harry', age: 21 },
    { name: 'Jack', age: 25 }
];

var arr = [1, 2, 55, 3, 4, 5];

arr.sort();
console.log(arr); // [1, 2, 3, 4, 5, 55]

person.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else {
        return 0;
    }
});

console.log(person); // [ { name: 'Harry', age: 21 }, { name: 'John', age: 23 }, { name: 'Jack', age: 25 } ]

var result = arr.every(function (value) {
    // return value > 3;
    // return value < 10;
    return value > 0;
});

console.log(result);

var result2 = arr.some(function (value) {
    return value > 30;
});

console.log(result2); // true
