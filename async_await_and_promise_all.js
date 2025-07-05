// Async-Await and Promise.all

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");
  await delay(1000);
  console.log("After 1 second");
}

asyncFunction();

// Promise.all example
const p1 = delay(1000).then(() => "One");
const p2 = delay(2000).then(() => "Two");

Promise.all([p1, p2]).then(results => {
  console.log("Results:", results); // ["One", "Two"]
});

/*
Explanation:
- async/await allows writing async code in a synchronous style.
- Promise.all runs multiple promises in parallel and waits for all to resolve.
*/
