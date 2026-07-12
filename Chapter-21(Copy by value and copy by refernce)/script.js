//mutable=can be changed
//immutable can not be changed

let name = "suresh";
let phone = 8399980;
let address = "Palasa,Srikakulam";

console.log(name);
console.log(phone);
console.log(address);

phone = 8399981;
console.log(phone);

let myAddress = address;
cosnole.log(myAddress);
myAddress = "Palasa,srikakulam,ap";
console.log(address);
console.log(myAddress);




/*
primitive values will be stored in stack memory.

Non primitive values will be stored in heap memory.That heap memory address will be stored in the stack.

1)when we store a non primitive value in a variable,that variable will store the address of that non primitive value in heap memory..If we we change the properties it will affect to the main one also.

2)when we store a primitive value in a variable,that variable will store the value itself in stack memory..If we we change the properties it will not affect to the main one.
*/

