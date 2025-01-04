var obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

for (var prop in obj) {
    console.log('obj.' + prop + ' = ' + obj[prop]);
}