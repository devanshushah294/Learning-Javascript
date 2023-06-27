// Fisrt child will be text node as body will not have the div tag exactly after it there will be some space or text
console.log(document.body.firstChild);

console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(typeof document.body.childNodes);
// if we want to see the all the nodes in array form we can see it as follows
let a = Array.from(document.body.childNodes);
console.log(typeof a);
console.log(a);
