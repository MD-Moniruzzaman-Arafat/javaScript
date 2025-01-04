var obj = { a: 1, b: 2 };
var obj2 = { a: 1, b: 2 };
console.log(obj === obj2); // false

if (obj.a === obj2.a && obj.b === obj2.b) {
    console.log('They are equal');
} else {
    console.log('They are not equal');
}