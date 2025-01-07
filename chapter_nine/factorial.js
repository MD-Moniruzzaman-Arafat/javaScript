function sum(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum(n - 1);
}

console.log(sum(5)); // 15

function fact(n) {
    if (n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}

console.log(fact(5)); // 120

var arr = [1, 2, 3, 4, 5];

function sumArray(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0;
    }
    return arr[lastIndex] + sumArray(arr, lastIndex - 1);
}

console.log(sumArray(arr, arr.length - 1));