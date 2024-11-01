//.find() always returns the first matching element, regardless of whether the array contains primitives or objects.


const numbers = [1, 3, 7, 10, 12];
const firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven); // Output: 10


//Example with an Array of Objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  // Find the first user who is older than 28
  const user = users.find(user => user.age > 28);
  
  console.log(user); 
  // Output: { name: "Bob", age: 30 }

  
  
  
  //.filter() returns a new array containing all elements that satisfy the condition.
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  // Find all users who are 30 or older
  const adults = users.filter(user => user.age >= 30);
  
  console.log(adults); 
  // Output: [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

//   Key Points
// .filter() returns a new array containing all elements that satisfy the condition.
// If no elements satisfy the condition, it returns an empty array [].
// It doesn’t modify the original array, making it useful for creating subsets of data.