"use strict";
/*
1)property flags
2)Object.freeze(),
3)Object.seal(),
4)Object.preventExtension()
*/

//1)Property flags
let student = {
  name: "rahul",
  phone: 9441985,
  address: "Palasa,Srikakulam",
};
console.log(student);
Object.getOwnPropertyDescriptor(student,"name");
console.log(Object.keys(student));
student.name = "Rahul Varun";
console.log(student.name);
Object.defineProperty(student,"name",{
  enumerable:false,
  writable:false,
});

/*
student.name = "Rahul";
console.log(student.name);//Error because we have changed the writable flag into false and we cant do this in strict mode but we can't error in non-strict mode but the value wont change.
console.log(Object.keys(student));//Here the name property is not showing because we made it as non enumerable property.
*/
delete student.name;
console.log(student.name);//Error






//So we cant doo every property singly .So to make every property once we have Object.freeze();,object.seal(),Object.preventExtensions()
