let s = "Hello, world";
console.log(s);

// Obtaining portions of a string
console.log(s.substring(1, 4)); // "ell": the 2nd, 3rd, and 4th characters.
console.log(s.slice(1, 4)); // "ell": the 2nd, 3rd, and 4th characters.
console.log(s.slice(-3)); // "rld": last 3 characters
console.log(s.split(",")); // ["Hello", "world"]: split at delimiter string

// Obtaining portions of a string
console.log(s.indexOf("l")); // 2: position of first letter l
console.log(s.indexOf("l", 3)); // 3: position of first "l" at or after 3 (i don't know how to works this line)
console.log(s.indexOf("zz")); // -1: s does not include the substring "zz"
console.log(s.lastIndexOf("l")); // 10: position of last letter l (i don't know how to works this line)

// Boolean searching functions in ES6 and later
console.log(s.startsWith("Hello")); // true: the string starts with these
console.log(s.endsWith("world")); // false: s does not end with that
console.log(s.includes("or")); // true: s includes substring "or"
