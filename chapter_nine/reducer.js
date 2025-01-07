var arr = [1, 2, 55, 3, 4, 5];

// var result = arr.reduce(function (prev, curr) {
//     // return prev + curr;
//     return Math.max(prev, curr);
// }, 0);

// console.log(result); 

function reduce(arr, cb, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i]);
    }
    return acc;
}

var result = reduce(arr, function (prev, curr) {
    return Math.max(prev, curr);
}, 0);