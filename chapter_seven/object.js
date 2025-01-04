// object literal
var person = {
    name: 'John Doe',
    age: 25,
}

// object constructor
var person2 = new Object();
person2.name = 'John Doe';
person2.age = 26;

// console.log(person);
// console.log(person2);

// accessing object properties
// console.log(person.name);
// console.log(person['name']);
person.department = 'IT';
person['salary'] = 50000;

person.name = 'MD. Moniruzzaman Arafat';
person['department'] = 'Software Engineer';
console.log(person);


// delete object properties
delete person.department;
console.log(person);