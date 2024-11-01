// Using Constructor Functions and Prototypes
// This is a more traditional way to implement inheritance in JavaScript, especially before the ES6 class syntax was introduced.

function Animal(type) {
    this.type = type;
  }
  
  Animal.prototype.speak = function() {
    console.log(`A ${this.type} makes a sound.`);
  };
  
  function Dog(name) {
    Animal.call(this, "dog"); // Inherit properties from Animal
    this.name = name;
  }
  
  // Set Dog's prototype to an instance of Animal
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog; // Ensure the constructor points to Dog
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} barks!`);
  };
  
  const myDog = new Dog("Buddy");
  myDog.speak(); // Output: A dog makes a sound.
  myDog.bark();  // Output: Buddy barks!
  

  //Using Object.create()
//Object.create() allows you to create a new object and directly set its prototype.

const animal = {
    speak() {
      console.log(`A ${this.type} makes a sound.`);
    }
  };
  
  const dog = Object.create(animal);
  dog.type = "dog";
  dog.bark = function() {
    console.log(`The ${this.type} barks!`);
  };
  
  dog.speak(); // Output: A dog makes a sound.
  dog.bark();  // Output: The dog barks!

 // The class syntax introduced in ES6 simplifies prototypal inheritance by using the extends keyword.

 class Animal {
    constructor(type) {
      this.type = type;
    }
  
    speak() {
      console.log(`A ${this.type} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super("dog");
      this.name = name;
    }
  
    bark() {
      console.log(`${this.name} barks!`);
    }
  }
  
  const myDog = new Dog("Buddy");
  myDog.speak(); // Output: A dog makes a sound.
  myDog.bark();  // Output: Buddy barks!
  