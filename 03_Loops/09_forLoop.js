/*
let sum = 0;
let n = prompt("Enter the number")
for (let i = 0; i < n; i++) {
    console.log(i);
    sum += i;
}
console.log("Sum = ", sum)
*/

let obj = { "Devanshu": 80, "Mubin": 90, "Divyank": 85 };
for (let i in obj) {
    console.log(i);
    console.log(obj[i]);
}

// for (let a of obj) {
//     console.log(a)
// }
// above commented code will give error as
// For of loops are only used for iterables not for objects

array = ["Devanshu", "Kenil", "Heet"]
for (let a of array) {
    console.log(a)
}
for (let i of "Devanshu") {
    console.log(i)
}
// Here in above code if we replace of by in then it will print the index from 0 to 7 for Devanshu and for array 0 to 2