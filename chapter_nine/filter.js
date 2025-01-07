var arr = [1, 2, 3, 4, 5];

// var result = arr.filter(function (value) {
//     return value > 3;
// });

// console.log(result); // [4, 5]

function filter(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var result = filter(arr, function (value) {
    return value > 3;
});

console.log(result); // [4, 5]