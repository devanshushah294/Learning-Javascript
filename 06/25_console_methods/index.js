// Viewing the console object in console itseelf
console.log(console);

// clearing console
// console.clear();

// console.assert(argument) will give error if it gets false in argument and will do nothing if gets true
console.assert(false);
console.assert(true);

// error to display any error message
console.error("OOOh! Error occured")

// console.table(obj); will display the objects key value pair in the tabular format in a very beautiful way
obj1 = {a:2,b:5,c:23};
console.table(obj1);

// To give the warning in the javascript we use console.warning() method.
console.warn("Hey please don't eat chocolates");

// console.info()
console.info("Hey it's an iportant information")

// console.time(arg); 
// process 
// console.timeEnd(arg);
// to mesure the time of any process

console.time("forLoop");
for(let i=0;i<10;i++){
    console.log(i);
}
console.timeEnd("forLoop");

console.time("while loop");
let i=0;
while(i<10){
    console.log(i);
    i++;
}
console.timeEnd("while loop");