/* Constructor with ES6 class

// In ES6, constructors are defined inside a class using a method called constructor(). Here’s an example of creating a Person class with a constructor:'*/

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("Alice", 25);
  person1.greet(); // Output: Hello, my name is Alice and I'm 25 years old.


  /*`Constructor with ES6 class
In ES6, constructors are defined inside a class using a method called constructor(). Here’s an example of creating a Person class with a constructor:`

*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I'm 25 years old.


`Constructor with Function (Pre-ES6)
Before ES6, constructors were typically written using regular functions with the new keyword.`

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
  
  const person2 = new Person("Bob", 30);
  person2.greet(); // Output: Hello, my name is Bob and I'm 30 years old.
  