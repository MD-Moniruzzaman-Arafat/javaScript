var arr = [1, 2, 3, 4, 5];

var result = arr.find(function (value) {
    return value > 3;
});

console.log(result); // 4

var result2 = arr.findIndex(function (value) {
    return value > 3;
});

console.log(result2); // 3

