//Example of Rest Operator:


// Function Parameters Example:
const printNumbers = (first, ...rest) => {
    console.log(`First number: ${first}`);
    console.log(`Rest of the numbers:`, rest);
  };
  
  printNumbers(1, 2, 3, 4); 
  // Output:
  // First number: 1
  // Rest of the numbers: [2, 3, 4]
  
  // Destructuring Example:
  const [a, ...restOfNumbers] = [10, 20, 30, 40];
  console.log(a);              // Output: 10
  console.log(restOfNumbers);  // Output: [20, 30, 40]
  



  //Example of Spread Operator:
  
  // Array Example:
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];

console.log(moreNumbers);  // Output: [1, 2, 3, 4, 5, 6]

// Function Arguments Example:
const add = (a, b, c) => a + b + c;
const nums = [10, 20, 30];
console.log(add(...nums));  // Output: 60

// Object Example:
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, city: "Dhaka" };
console.log(updatedUser);  // Output: { name: "Alice", age: 25, city: "Dhaka" }
