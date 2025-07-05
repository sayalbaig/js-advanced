// Prototypal Inheritance in JavaScript

const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

const dog = Object.create(animal);
dog.barks = true;

dog.walk(); // Inherited from animal
console.log(dog.eats); // true

/*
Explanation:
- `dog` inherits from `animal` using Object.create.
- The prototype chain allows dog to access properties/methods from animal.
*/
