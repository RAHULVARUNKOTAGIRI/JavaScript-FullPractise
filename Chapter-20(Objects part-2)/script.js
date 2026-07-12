let fullName = "Rahul Varun";
console.log("How are you?");
function wish(){
  console.log(this);
  console.log("Happy birthday");
  console.log("Read properly")
}

wish();


let student = {
  name:fullName,//we can assign a already defined variable also as value 
  phone:8399980,
  address:"Kanchikacherla,Andhra pradesh",
  wish:function(){
    console.log(wish);
    console.log(`Happy birthday ${this.name}`);//here this is used to refer the current object,It do's only in object.
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


//To convert the object into string we can use JSON.stringify() method which will convert the object into string representation of the object.
alert(student);// it print object-object;
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

//If the property name contains spaces,hyphens,or other special characters,you must use square bracket notation.
//Dot notation doesnt support property names that begin with numbers.
//console.log(funObject.1)we cant use dot property here 
console.log(funObject[1])


const key = prompt = ("Enter which key you want? name or age ?");
console.log(key);

const person = {
  name: "Alice",
  age: 25,
};

console.log(person[key]);









//Short hand property
const name1 = "Dhoni";
const age1 = 42;
const role = "captain";

/*
const player = {
  name1:name1,
  age1: age1,
  role:role,
};
*/ //if both key and values names are same means we can simply write like below
const player = {
  name1,
  age1,
  role,
}
console.log(player);