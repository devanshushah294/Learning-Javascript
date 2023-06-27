alert("Script has been loaded");
let a = Number.parseInt(prompt("Enter the value of a"));
let b = Number.parseInt(prompt("Enter the value of b"));
let c = a + b;

// if we want to give a default value to prompt than we can give using other argument as follows
document.write(c);
let gender = prompt("Enter the gender", "male");

let confirmAnswer = confirm("Are you sure?");
if (confirmAnswer) {
  console.log("Yess");
} else {
  console.log("Nooo");
}
