//Property exitence test(in,hasOwnProperty)
"user strict"
let student = {
  name: "rahul",
  phone:9441985,
  address: "kanchikacherla,Krishna",
};

console.log(student.marks);
if(student.marks === undefined){
  console.log("marks key doesn't exist")
}else{
  console.log("marks key exist")
}


console.log(student.hasOwnProperty("marks"));//it will return true if the property exist in the object otherwise it will return false

const student1 = Object.create(student);
console.log(student1);
console.log(student1.hasOwnProperty("marks"));//it will return false.It doesn't check in the parent prototype.
console.log("marks" in student1);//To overcome the above one we are using "in" keyword to check in parent prototype also.