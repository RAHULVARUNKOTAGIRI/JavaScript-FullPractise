let ramAmount = 2000;
let rahulAmount = 3000;
let totalAmount = ramAmount + rahulAmount;
console.log("Total amount: " + totalAmount);

console.log(`Ramu's Amount`, ramAmount);
console.log(`Rahul's Amount` , rahulAmount);
console.log(`Total Amount`, totalAmount);






//In let we can reassign the value but in const we cannot reassign the value. 
// We can only declare and initialize the value once. 
// If we try to reassign the value of a const variable, it will throw an error. 
//Var is function scoped and can be redeclared and updated.
let rahul = 10;
rahul = 20;
const pi = 3.14;
pi = 3.14159; // This will throw an error because we cannot reassign a value to a constant variable
var name = "Rahul";
var name = "Ramu"; // This will not throw an error because var can be redeclared and updated


let marks;
console.log(marks); // This will print undefined because we have declared the variable but not initialized it with any value.