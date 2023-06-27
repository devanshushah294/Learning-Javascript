function newContent() {
  document.open();
  document.write("<h1>Out with the old, in with the new!</h1>");
  document.close();
}
newContent();

function oldContent() {
  document.write("<h1>Devanshu shah is a good boy</h1>");
}
oldContent();
// document.write("hello");
// console.log("how are you?");
// alert("you are making an error");
// a = prompt("Enter the number");
// b = Number.parseInt(a);
// console.log(typeof b);

// Armstrong Number
// let a = prompt("Enter the number");
// let length = a.length;
// console.log(length);
// let number = Number.parseInt(a);
// let sum = 0;
// while (number > 0) {
//   let p = number % 10;
//   sum = sum + Math.pow(p, length);
//   number = Number.parseInt(number / 10);
// }
// if (Number.parseInt(a) == sum) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// Factors
// let a = prompt("Enter the number");
// let number = Number.parseInt(a);
// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     console.log(i + "is a factor of " + number);
//   }
// }

// fibonacci
// 0, 1, 1, 2,3,5
// let a = prompt("Enter the number");
// let number = Number.parseInt(a);
// if (a == 1) {
//   console.log("0");
// } else if (a == 2) {
//   console.log("0,1");
// } else {
//   let currNumber = 1;
//   let lastNumber = 0;
//   for (i = 2; i <= number; i++) {
//     let temp = lastNumber;
//     lastNumber = currNumber;
//     currNumber = currNumber + temp;
//   }
//   console.log(number + "digit is = " + currNumber);
// }

// gcd of two numbers
// let arr1 = [];
// let a = prompt("Enter the number");
// let number = Number.parseInt(a);
// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     arr1.push(i);
//   }
// }
// let arr2 = [];
// let b = prompt("Enter the number");
// let number2 = Number.parseInt(b);
// for (let i = 1; i <= number2; i++) {
//   if (number2 % i == 0) {
//     arr2.push(i);
//   }
// }
// console.log(arr1);
// console.log(arr2);
// let isFound = false;
// for (let i = arr2.length - 1; i >= 0; i--) {
//   for (let j = arr1.length - 1; j >= 0; j--) {
//     if (arr2[i] == arr1[j]) {
//       isFound = true;
//       console.log("gcd =" + arr1[i]);
//       break;
//     }
//   }
//   if (isFound) {
//     break;
//   }
// }

// prime number
// let a = prompt("Enter the number");
// let isPrime = true;
// let number = Number.parseInt(a);
// for (i = 2; i < number; i++) {
//   if (number % i == 0) {
//     isPrime = false;
//     console.log("Not");
//     break;
//   }
// }
// if (isPrime) {
//   console.log("Yes");
// }
