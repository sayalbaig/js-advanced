// 'this' and Binding Context in JavaScript

const obj = {
  name: "Alice",
  greet() {
    console.log("Hello, " + this.name);
  },
};

obj.greet(); // Hello, Alice

const greetFn = obj.greet;
greetFn(); // 'this' is undefined or window (depends on strict mode)

const boundGreet = obj.greet.bind(obj);
boundGreet(); // Hello, Alice

/*
Explanation:
- `this` depends on the call-site.
- Using bind(), we can permanently set the value of `this`.
*/
