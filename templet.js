// const a=5;
// const b=7;
// const result='The sum '+ a +' '+'and' +' '+ b +' is' +'  :'+(a+b);
// console.log(result)


// const a=5;
// const b=7;
// const result=`The sum ${a} and ${b} is ${a+b}.`
// console.log(result)


//Rest Operator
const exampleFunction = (...args) => {
    console.log(args);
  };
  
  exampleFunction(1, 2, 3, 4); // Output: [1, 2, 3, 4]
  
//
array.forEach((element, index, array) => {
  // code to execute for each element
});



//Example
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});
// Output:
// Fruit 1: Apple
// Fruit 2: Banana
// Fruit 3: Cherry


const printAll = (...items) => {
   console.log(`Number of items: ${items.length}`);
   items.forEach((item, index) => {
     console.log(`Item ${index + 1}: ${item}`);
   });
 };

 printAll("Apple", "Banana", "Cherry");
  //output:
//Number of items: 3
// Item 1: Apple
// Item 2: Banana
// Item 3: Cherry


 //using object
 const fruitObject = {
   1: "Apple",
   2: "Banana",
   3: "Cherry"
 };
 
 // Convert the object to an array using Object.values and use forEach
 Object.values(fruitObject).forEach((fruit, index) => {
   console.log(`Fruit ${index + 1}: ${fruit}`);
 });
 // Output:
 // Fruit 1: Apple
 // Fruit 2: Banana
 // Fruit 3: Cherry
 