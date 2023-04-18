// 7 primitive datatypes
// nn bb ss u
const a = null;
const b = 3; // number datatype
const c = true; // can also be false
const d = BigInt(7);
const symbol = Symbol("nbsp");
const e = "Devanshu"
const f = undefined;
console.log(a, b, c, d, symbol, e, f)
console.log(typeof d)

// Non primitive datatypes in JavaScript are objects they are just like dictionary in python
// and like hashmaps in java consists of key value pairs surrounded by curly braces
const object = { "Name": "Devanshu", age: 20, "sem": 4, cource: "Computer science and engineering", job: undefined }
console.log(object)
console.log(object["Name"])
console.log(object["ksnvk"]) // return undefined