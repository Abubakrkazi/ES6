//Simple Transformation
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]


//map is useful for extracting properties from objects in an array:
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const names = users.map(user => user.name);
  console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

  
  //You can use map to apply conditional logic as well:
  const numbers = [1, 2, 3, 4, 5];
const modified = numbers.map(num => (num % 2 === 0 ? num * 2 : num));
console.log(modified); // Output: [1, 4, 3, 8, 5]


//You can also chain map with other array methods like filter and reduce for more complex transformations:

const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(num => num * 2); // Double the filtered numbers

console.log(result); // Output: [4, 8]
