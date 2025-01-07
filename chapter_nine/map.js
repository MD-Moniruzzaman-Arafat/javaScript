var arr = [1, 2, 3, 4, 5];

// var sqrt = arr.map(function (value) {
//     // return Math.random() * 100;
//     // return Math.sqrt(value);
//     return value * value;
// });

// console.log(sqrt);


function map(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i], i, arr);
        newArr.push(temp);
    }
    return newArr;
}

var qube = map(arr, function (value) {
    return value * value * value;
});

console.log(qube); // [1, 8, 27, 64, 125]