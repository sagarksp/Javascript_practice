/*
Closure = function + uska lexical environment (outer variables ka access)

👉 Matlab:
Ek function apne outer function ke variables ko yaad rakhta hai, even after outer function execution finish ho jaye.

“Closure is a function that has access to its lexical scope even after the outer function has executed.”
*/

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();

fn(); // 1
fn(); // 2
fn(); // 3

/*
outer() run hua → normally variables destroy ho jate
But inner function ko return kiya
inner ke paas access hai count ka
Isliye count memory me preserved hai
*/