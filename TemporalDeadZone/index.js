/*
Let & Const in JS Temporal Dead Zone..........
IN case of let and const they store value in a different memory space than global.
--They are stored in a separate memory space..
--U can't access these values before you have put some value in it 


-----TEMPORAL DEAD ZONE-----
Temporal Dead zone is a time since when this let variable was hoisted and till it is initialize some value..
-Temporal Dead zone m jb variabl eassign krni ki kosis krte h to wo reference error deta h i.e can't access before initialization 

----Const----
Const m value hume usi k sath assign krni pdti h na ki bad m usi samay krni hoti h assign values 

Const is more strict in its scope as in comparison of let and var


imp--Use const as much as you can and try to initialize variables at the top it shrinks the Temporal dead zone to zero..
*/

console.log(a);
/*
Ye time jo h wo temporal dead zone h
*/

let a=10;