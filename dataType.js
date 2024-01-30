let x;
x = 5;
x = 0.1;
x = "hello world";
x = true;
x = false;
x = null;
x = undefined;
let euro = "€";
let love = "❤";
euro.length;
// => 1: this character has one 16-bit element
love.length;
// => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"
console.log(euro, love);
