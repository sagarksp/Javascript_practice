//Not defined !== Undefined 
/*
not defined is not equal to the undefined 
Undefined is worked as a place holder in javascript and worked as in hoisting environment......
----When any variable is called before it  get initialize due to hoisting than that varialbe assign by this special character
not defined in the memory creation phase....

-- While on the other hand not defined when we try to console the variable which is not get declared yet than 
that code shows eror of not defined...
*/

var a;
console.log(a);

a=10;
console.log(a);

a = "hello world"

console.log(a)

//x shows error of not defined 
console.log(x)
