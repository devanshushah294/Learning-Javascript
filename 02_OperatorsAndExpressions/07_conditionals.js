let a = prompt("Enter age")
a = Number.parseInt(a)
if (a >= 21 && a <= 150) {
  console.log("You are allowed")
}
else if (a > 0 && a < 21) {
  console.log('You are not allowed')
}
else {
  console.log("Bhoot")
}
console.log(typeof a)

let selected = "papayas"
switch (selected) {
  case "papayas":
    console.log("Papayas")
    break;
  case "mangoes":
    console.log("Mangoes")
    break;
  default:
    console.log("Banana")
}
// consitional operator
console.log(a > 18 ? "Yes" : "No")
