//Object.assign
//Spread Operator

//As we seen in the befor chapter if we change the value in non primitive values, it will affect the original object as well.To overcome it we are using these "Object.assign" and "Spread Operator" to create a new object with the same properties of the original object. 

let student  = {
  name: "suresh",
  phone: 8399980,
  address: "Palasa,Srikakulam",
};

console.log(student);
let student2 = Object.assign({}, student);//creating a new object with the same properties of the original object using Object.assign.Here First parameter was targetobject like where we are storing and second parameter was source object like from where we are copying the properties.
console.log(student2);
student2.name = "John jigiri";
console.log(student2.name);
console.log(student.name);



//For multiple source targets 
const obj1 = {
  a:1,
  b:2,
}
const obj2 = {
  b:3,
  c:4,
};
const obj3 = Object.assign({},obj1,obj2);//Here we are giving multiple source objects.Here if we get the same key in multiple source objects then the last source object will be considered as final value.




//Now we are Modifying the target object
const target = {a:1};
Object.assign(target,{b:2},{c:3});
console.log(target);


//The Object.assign() method is used to copy the values of all _________ properties from one or more source objects to a target object.It will return the target object.




//Spread Operator.

let student1 = {
  name: "suresh",
  phone :8399980,
  address :"Palasa,Srikakulam",
};
console.log(student);
let student2 = {...student1}//Spread operator is used to copy the properties of the original object into a new object.
console.log(student2);
student.name = "john jigiri";
console.log(student2.name);
console.log(student1.name);








//This object.assign and spread operator what we have done upto now was shallow copying and cloning