// closure is a function that has access to the outer function scope

function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        let innerVariable = 'I am inside!';
        console.log(outerVariable);
    }
    return innerFunction;
}

let myInnerFunction = outerFunction();
myInnerFunction(); // I am outside!