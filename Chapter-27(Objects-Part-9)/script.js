//what is that prototype?
"user strict";
let student = {
  name: "suresh",
  phone: 8399980,
  address: "Palasa,Srikakulam",

};
console.log(student);


const animal = {
  eats:true,
  walk(){
    console.log("Animal walks");
  },
};
const dog = {
  barks:true,
};
console.log(dog.eats);


Object.setPrototypeOf(dog,animal);//Here we are setting the prototype of dog object to animal object.
console.log(dog.eats);



//How protype chain works:
/*
 * when a property or method is accessed on an object:
*Javascript checks the object itself
*If not found,it looks at the [[prototype]] chain until it finds the property or reaches null.

 */

//TO check what type of prototype we have inherited means we use Object.prototypeOf(dog);
console.log(Object.getPrototypeOf(dog));




//When we are creating the empty object and if we want try to assign the exiting object as parent means we can do like this

const animalDetails = Object.create(animal);
console.log(animalDetails);





//Task 01
const grandParent = {surname:"Smith"};
const parent = Oject.create(grandParent);
parent.firstName = "John";

const child = Object.create(parent);
child.age = 10;

console.log(child.surname);//smith
console.log(child.firstName);//john
console.log(child.age);//10


//not assigning any properties
const emptyObject = Object.create(null);
console.log(emptyObject);//it dont have prototypes even builtin one also.