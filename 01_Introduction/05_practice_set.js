// chapter 01

// Question 1 
let a = "Devanshu";
a = a + 1;
console.log(a);

// Question 2
console.log(typeof a);

// Question 3
const obj = { "Name": "Devanshu", "Number": "1234" };

// obj = "Devanshu" will give an error if this will datatype of obj will be changed from object to any other
console.log(obj);

// Question 4
// yes we can add a new key-value pair to this const object and edit any value using key
obj["Sem"] = 4;
obj["Name"] = "Devanshu Shah";
console.log(obj);


// Question 5
// write a js program to create a dictionary of 5 words - meaning
const dict = {
  appreciate: "to enjoy something or to understand the value of somebody/something",
  arrogant: "thinking that you are better and more important than other people",
  absence: "a time when somebody is away from somewhere; the fact of being away from somewhere",
  absolutely: "completely totally",
  abhorrent: "that makes you feel hate or disgust"
};
console.log(dict);
console.log(dict.abhorrent);
console.log(dict["abhorrent"]);