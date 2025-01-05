function add(a, b) {
    var total = a + b;
    console.log(total);
}

add(10, 20); // 30

function arraySum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total);
}

arraySum([10, 20, 30]); // 60


function allSum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(total);
}

allSum(10, 20, 30, 40, 50); // 150
allSum(10, 20, 30); // 60