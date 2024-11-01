const person = {
    name: "Alice",
    age: 25
  };
  
  Object.freeze(person);
  
  person.age = 30;  // Attempt to change property (will fail in strict mode)
  console.log(person.age);  // Output: 25
  
  person.city = "Dhaka";  // Attempt to add a new property (will fail in strict mode)
  console.log(person.city);  // Output: undefined
  
  delete person.name;  // Attempt to delete a property (will fail in strict mode)
  console.log(person.name);  // Output: Alice

  
  //obj: The object that you want to seal.


  const user = {
    name: "John",
    age: 30
  };
  
  Object.seal(user);
  
  user.age = 31;  // Allowed: Modifying an existing property
  console.log(user.age);  // Output: 31
  
  user.city = "Dhaka";  // Not allowed: Adding a new property (fails silently in non-strict mode)
  console.log(user.city);  // Output: undefined
  
  delete user.name;  // Not allowed: Deleting a property (fails silently in non-strict mode)
  console.log(user.name);  // Output: John

  
  //You can use Object.isSealed() to check if an object is sealed.
  const user = {
    name: "John",
    age: 30
  };
  
  console.log(Object.isSealed(user));  // Output: false
  
  Object.seal(user);
  
  console.log(Object.isSealed(user));  // Output: true
  