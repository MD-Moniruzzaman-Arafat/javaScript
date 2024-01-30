let book = {
  topic: "JavaScript",
  edition: 7,
};

console.log(book); // print object

console.log(book.topic); // access object property
console.log(book["edition"]); // access object property

book.author = "Flanagan"; // added new property for book object
book.contents = {}; // added new property for book object
console.log(book); // print object

// Conditionally access properties with ?. (ES2020):
console.log(book.contents?.ch01?.sect1); // => undefined: book.contents has no ch01 property.
