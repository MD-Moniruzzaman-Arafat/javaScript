// callback function
function greet(name, callback) {
    console.log('Hi! ' + name);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

greet('JavaScript', callMe);

