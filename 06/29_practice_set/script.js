function ageFunction() {
  let age = Number.parseInt(prompt("Enter the age"));
  canDrive(age);
  if (confirm("Would you like to see above prompt again ? ")) {
    ageFunction();
  }
}
const canDrive = (age) => {
  if (age < 0) {
    console.error("Non negative value of the age must be entered");
  } else if (age < 18) {
    alert("You can't drive");
  } else {
    alert("You can drive");
  }
};

ageFunction();
let number = Number.parseInt(prompt("Enter the number : "));

// Answer 4
if (number > 4) {
  window.location.assign("https://www.google.com");
}

// Answer 5
let color = prompt("Enter the color");
document.body.style.background = color;
console.log("Reached here");
