/*
Code inside curly bracket is called block { var a=10 any code inside is called block}

function declaration time p permanent rhta h {}
but arrow function m agr single statement hoti h to need nhi pdti 

--LET AND CONST KO block scope bolte h as they stored hote h alg block space m

-------SHADOWING-------
Shadowing should not cross the scope of original otherwise it will give error

Shadowing basically jaise hum same name k variable ko let se bhi and var se bhi declare kr dete h to wo erroe de dega like 
var a = 10 -------- let a = 10;
it gives error

*/

var c = 100;
function X(){
    var c = 30;
    console.log(Window.c);
    window.c = 20;
}
X();
console.log(c)