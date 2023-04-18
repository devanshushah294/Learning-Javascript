console.log("operators in JS");

// Arithmatic operators
let a = 45;
let b = 4;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);
console.log(++a)
console.log(a++)
console.log(a--)
console.log(--a)
// ++a initially increments the value of a by 1 and then returns the new value
// while a++ initially returns the value of a and the increments it by 1
// same goes with a-- and --a

// Assignment operators
let assignment = 1;
assignment += 5
console.log(assignment)
assignment -= 5
console.log(assignment)
assignment *= 5
console.log(assignment)
assignment /= 5
console.log(assignment)
assignment **= 5
console.log(assignment)

// comparison operators
let comp1 = 23;
let comp2 = "23";
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
// triple equals checks the datatype also
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
// also more operators like <,>,<=,>=,etc

// Logical operators
// logical and = &&
// logical or = ||
// logical not = !
// similar to another languages like java

// Comments in JS
// Single line comments can be used as using double forward slash //
// Multi line comments can be used as using forward slash and star /* comments */