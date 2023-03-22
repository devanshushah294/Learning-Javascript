// var a = 23;
// var b = "Devanshu";
// var c = null;
// var d = undefined; x
const a = 23
if (a == 23) {
  console.log(a)
}
// let variables are block scoped they can't be redeclared under sameblock but can be changed

let b = 23
{
  // let b = 234
  // console.log(b)
  b = 34
}
console.log(b);