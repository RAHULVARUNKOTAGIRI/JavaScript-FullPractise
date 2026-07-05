let fullName = "Rahul Varun";
console.log("How are you?");
function wish(){
  console.log(this);
  console.log("Happy birthday");
  console.log("Read properly")
}

wish();


let student = {
  name:fullName,//we can assign a already defined variable aslo as value
  phone:8399980,
  address:"Kanchikacherla,Andhra pradesh",
  wish:function(){
    console.log(wish);
    console.log(`Happy birthday ${this.name}`);
    console.log("Read Properly");
  },
}

console.log(student.name);
student.wish();

/*
//Function ==> it can exxist independently and doesnt have to be associated with an abject
===>Funtions can be invoked directly by name

Method ==> A Method is a function that is a property of an object
===>Methods are invoked through the object they belong to
*/



console.log(this)
console.log(window)


alert(100);//it converted into string
alert(true)//it converted into string

alert(student);// it print onject-object;
alert(JSON.stringify(student));//it will show all the properties of object







//Task
const patient = {
  height:162,
  weight:62,
  "full name":"Rahul varun",// we only us the ("") when key values has space,etc.or else javascript will change;
}

//to get values ex:full namewhich was forcefully kept in inverted commas was 
console.log(patient["full name"]);

const funObject = {
  1:"suresh",
  2:undefined,
  3:"Vishnu vardhan",
  4:"swami ganesh",
  null:100,
  undefined:"generally",
  true:"what",
  false:"fun",
  50:"fifty fifty"
};
console.log(funObject);//in objects we can use the reserved words as key also.

//console.log(funObject.1)we cant use dot property here 
console.log(funObject[1])