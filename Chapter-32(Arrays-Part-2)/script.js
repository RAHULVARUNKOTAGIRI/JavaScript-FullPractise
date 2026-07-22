//Push and Pop
//Shift and Unshift


"use strict";
let fruits = ["apple","banana"];
console.log(fruits);

//push
//Purpose==> Adds one or more elements to the end of an array.
//Returns new length of the array.
fruits.push("orange");
console.log(fruits);


//pop
//purpose ==>removes the last element in the Array
//returns the removed element
const data  = fruits.pop();
console.log(data);
console.log(fruits);


//shift
//reverse of the pop it removes the first elementand return that element
const data1 = fruits.shift();
console.log(data1);
console.log(fruits);

//unshift
//reverse of push
fruits.unshift("grapes");
console.log(fruits);