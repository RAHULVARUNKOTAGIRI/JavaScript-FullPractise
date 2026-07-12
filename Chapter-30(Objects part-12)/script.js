//For in loop

"use strict";
let student = {
  name: "suresh",
  phone: 9441985,
  address:"Kanchikacherla,Krishna",
}

console.log(Object.keys(student));

for(let key in student){
  console.log(key);
}

let student1 = Object.create(student);
student1.marks = 100;
console.log(Object.keys(student));

for(let key in student){
  console.log(student[key]);
}

//only print its own properties
for(let key in student){
  if(student1.hasOwnProperty(key)){
    console.log(key);
  }
}



//Another example
const sureshObj = {
  name : "Rahul",
  "channel Name" : "Rahul techs",
  1:"hareesh",
  4:"swami ganesh",
  3:"vishnu vardan",
  50: "fifty fifty",
};


console.log(Object.keys(sureshObj));
for(let key in sureshObj){
  console.log(key,sureshObj[key]);//here numbers will come first
}


//Objects are unordered collections of key-value pairs.
//Arrays are ordered collections of values indexed by numbers.