// Asynchronous JavaScript and Event Looping

// JavaScript is single-threaded, but uses an event loop to handle asynchronous tasks.
// Call Stack -> Web APIs -> Callback Queue -> Event Loop

// Example:
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");

/*
Output:
Start
End
Promise resolved
Timeout callback

Explanation:
1. 'Start' and 'End' are synchronous and logged immediately.
2. Promise resolution goes to the microtask queue.
3. setTimeout goes to the macrotask queue.
4. Event loop prioritizes microtasks over macrotasks.
*/
