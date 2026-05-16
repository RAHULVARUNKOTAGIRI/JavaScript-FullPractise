console.log("I am good boy");

console.log("I have master's degree");

console.log('I am the "best".');

console.log("I am the ", "asfdsadfa", 1000, "adsfda");

console.log("I am\nlearning\nJavaScript\nfrom\ndocumentation");

console.log(`I am
learning
JavaScript
from
documentation`);

let name = "Rahul";
let age = 20;
age + 1; //age is not updated because we have not assigned it to the variable
age = age + 1; //age is updated because we have assigned it to the variable
console.log(name + " age is " + age);
console.log(`${name}'s age is ${age}`); //template literals

//operands type
//1)unary operators: they operate on a single operand.
let a = 10;
console.log(a);
a++; //post increment
console.log(a);
a--; //post decrement
console.log(a);
++a; //pre increment
console.log(a);
--a; //pre decrement
console.log(a);

//typeoff operator
typeof 300; //number
console.log(typeof 300);
//typeof operator is used to find the type of the data.
// Two types of sysntax for typeof operator:
//1)typeof operand
//2)typeof(operand)

/*
  Feature	     var	       let	        const
  Scope	     Function	     Block	     Block
  Re-declare	✅ Yes	     ❌ No	      ❌ No
  Update	    ✅ Yes	     ✅ Yes	    ❌ No
  */

//suppose the example is like this
console.log(title);
console.log(price);
console.log(typeof typeof title);
console.log(typeof typeof price);

let title = "JavaScript";
let price = 300;
let noOfpages = 200;
let author = "Rahul";
// these all give eeror because we are trying to access the variables before declaring them.
//we can access the variables declared with 'var'

//Constructor function for creating objects
class Book {
  static author = "Rahul"; //static variable is shared among all the instances of the class. It is not tied to any specific instance of the class. It can be accessed using the class name.
  constructor(title, price, nPages) {
    this.title = title;
    this.price = price;
    this.noOfPages = nPages;
  }
  updatePrice(newPrice) {
    this.price = newPrice;
  }
}

new Book("JavaScript", 300, 200 /*"Rahul"*/); // here we are creating an object of the Book class but we are not assigning it to any variable.

let jspython = new Book("Python", 400, 300 /*"Rahul"*/); // here we are creating an object of the Book class and assigning it to the variable jspython.
console.log(jspython);

let javabook = new Book("Java", 500, 400 /*"Rahul"*/);
console.log(javabook);
let cppbook = new Book("C++", 600, 500 /*"Rahul"*/);
console.log(cppbook);

console.log(Book.author); // we can access the static variable using the class name.why we have declared means the author name was same for all the books so we have declared it as static variable.

//if we want to update any properties we need to write another function in the class and then we can call that function to update the properties of the object.
jspython.updatePrice(450);
console.log(jspython);
