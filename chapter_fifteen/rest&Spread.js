// rest operator
let sum = (...args) => {
    let total = args.reduce((a, b) => a + b);
    return total;
}

console.log(sum(10, 20, 30)); // 60


const numbers = [10, 20, 30];

const number2 = [...numbers];
console.log(number2); // [10, 20, 30]


// spread operator
const obj = {
    name: 'Md Tazri',
    age: 22
};

const obj2 = {
    ...obj
};

console.log(obj2); // { name: 'Md Tazri', age: 22 }