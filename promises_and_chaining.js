// Promises and Promise Chaining

// A promise represents a value that may be available now, later, or never.

function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 complete");
      resolve("Result 1");
    }, 1000);
  });
}

function asyncTask2(prevResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 complete", prevResult);
      resolve("Result 2");
    }, 1000);
  });
}

asyncTask1()
  .then((result1) => asyncTask2(result1))
  .then((result2) => console.log("Final result:", result2));
