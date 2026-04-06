/*

----Scope -- Scope ka matlab h where you can acess a specifice variable or a function in a code..
----Scope is directly depend on the lexical environment 

--->>Lexical Environment - Lexical environment i sthe local memory along with its parent's lexical environment
----Basically ye sequence and Heirarchy......

Mtlb kya h na ki lexical environment wo h jisme koi function dusre function m call ho rha ho to wo uski properties bhi rakh
leta a apne memory k sath 

---SCOPE CHAIN - javascript engine first looks for the variable/functions being accessed in the local scope 
of function, and if not found, it keeps on searching the lexical environment of its parent until it 
finds the Variable / function being accussed.

Aur scope chain m nhi mila wp variable to console m not defined error a jayega


*/

//parent of c()
function a(){

    var b =10;
    c();
    function c(){
        //b ki value a jayegi kyoki wo uske parent m called h
        console.log(b)
    }
}
a();









