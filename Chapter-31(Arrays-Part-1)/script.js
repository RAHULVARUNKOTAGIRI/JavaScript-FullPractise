//Arrays
//==>The data type which can store multiple values in a single variable is called an array. An array is a special variable, which can hold more than one value at a time.
// It is a collection of similar types of data.
//Arrays are ordered collections of values indexed by numbers. Each value in an array is called an element, and each element has a numeric index that indicates its position in the array. 
// The first element has an index of 0, the second element has an index of 1, and so on.


"use strict";


/*
const friends = ['suresh','rahul',true,1];
console.log(friends);
console.log(typeof friends);//object
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);
console.log(friends.at(-1));//it will print the last element of array."-" menas it will come from backwards.
console.log(friends[10]);//undefined because there is no element at index at 10
friends[10] = 'new element';//it will add a new element at index 10 and the length of the array will be 11
*/

const friends = ["suresh","hareesh","rahul"];
const friends2 = friends;
console.log(friends2);
friends2[0] = "john jigiri";
console.log(friends);
console.log(friends2);

//To overcome refernce copy we use spread operator

const arr1 = [10];
const arr2 = [10];
console.log(arr1 == arr2);//False==>Here we are checking the refernce location not the values of the array because both the arrays are stored in different memory locations so it will return false.





//ArrayConstructor
//Upto know we created arrays with array literals now we are creating with array constructor.
const data = new Array(10);//it will create an arra with length 10 with undefined values
console.log(data);
const data1 = new Array(10,20,30);//it will create an array with 3 elements 10,20,30


//Array of
const data2 = Array.of(10,"Suresh",true);
console.log(data2);//it will create the elements with above valus.


//spare array
const students = ["john","aravind",,,1];
console.log(students);//it will create an array with 4 elements and the 3rd element will be empty