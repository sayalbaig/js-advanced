// Closures in JavaScript

// A closure is the combination of a function and the lexical environment within which that function was declared.

function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}

const fn = outer();
fn(); // 1
fn(); // 2

/*
Explanation:
- `inner` is a closure that remembers `counter` from `outer` even after `outer` has finished executing.
*/
