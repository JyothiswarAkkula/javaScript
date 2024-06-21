//1.There are three type of variable in javaScript
// let var const
let e = "Akkula  "
var a = "jyothiswar"
let b = 20
const c = 20
let d = b + c
console.log(e + a)
console.log("a value is =" + a)
console.log("b value is =" + b)
console.log("c value is =" + c)
console.log("sum of b and c is =" + d)



//2.local variable 
//local variable is written inside the function 

function College() {
	// Local variable 
	let course = "maaster of ccomputer appliocations"
	console.log(course);
}
College()
//2.1 local variable
function myfunc1() {
	// Local variable
	let course = "computer";
	console.log(course);
}

function myfunc2() {
	// Local variable 
	let course = "GfG";
	console.log(course);
}
myfunc1()
myfunc2()



//3.Global variable
// variable is written out side the function 
let courseName = "JavaScript"
function course() {
	console.log(courseName);
}
course()
//3.1 Global variable
// variable declerd inside the function and call out side the function
function Global() {
	// Considered global
	courseName = "python";
	//console.log( courseName );
}
Global()
console.log(courseName);








