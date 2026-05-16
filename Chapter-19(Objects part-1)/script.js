class student{
  static  COLLEGE_NAME = "Suresh Techs";
  constructor(name,phone,address){
    this.name = name;
    this.phone = phone;
    this.address = address;
  }
}
let student1 = new student("suresh",8399980,"Palasa,Srikakulam");
console.log(student1);
console.log(typeof student1);
let student2 = new student("hareesh",8473211,"Palasa,Srikakulam");
console.log(student2);


let obj = new Object();
console.log(obj);



//Object literal syntax

let student3 ={
  name :"suresh",
  phone : 8399981,
  address : "Palasa,Srikakulam"
  //[[Prototype]]:Object it will coma at running time
}


/*

//Here the 
==>keys
  name
  phone
  address


==>Values
   suresh
   8399981
   Palasa,Srikakulam

==>Properties
   name = "suresh",
   phone = 8399981,
   address = "Palasa,Srikakulam"

*/

let student4 = {
  name:"suresh",
  phone:8399980,
  address:"Palasa,Srikakulam",
}
console.log(`${student4.name} is from ${student.address}`);
console.log(student4.city);//Accessing a property that doesnt exit on the object will return undefined

//To avoid above one
if(student4.city==undefined){
  console.log("city key is not available in student object");
}else{
  console.log(student.city);
}

//now we see how to update the values in object
student4.phone = 83999981;
console.log(student.phone);


//how to add new properties to an object
student4.gender = "Male";
console.log(student4);


//Deleting key value
delete student4.gender;
console.log(student4);







let fullName = "suresh yadam";
console.log(fullName);

console.log(fullName.toUpperCase);
//When you try to access a method or property on a primitive(like calling .toUpperCase() on a string),Javascript internally wraps the primitive ina corresponding built-in-object for the duration of the operation