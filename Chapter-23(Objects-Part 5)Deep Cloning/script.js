//Deep Cloning

let student = {
  name: "suresh",
  phone: 8399980,
  address:"Palasa,Srikakulam",
  wish:function(){
    console.log("Happy Birthday");
    console.log("Read properly");
  },
};


//object inside other objects are called nested objeccts.


// let student1 = {
//   name: "suresh",
//   phone: 8399980,
//   address:{
//     city: "Palasa",
//     District: "Srikakulam",
//   },
//   wish:function(){
//     console.log("Happy Birthday");
//     console.log("Read properly");
//   },
// };

// let student2 = {...student1};
// console.log(student1);
// student2.name = "john jigiri";
// console.log(student2.name);
// console.log(student2);
// student2.address.city = "Palasa,kasibugga";
// console.log(student1.address.city);//Here it was also changing so it obtained beacuse the nested objects you can see in the image file in this folder. 
// console.log(student2.address.city);




// To overcome the above issue and to make deep cloning we use the strutureed clone

let student1 = {
  name: "suresh",
  phone: 8399980,
  address:{
    city: "Palasa",
    District: "Srikakulam",
  },
  // wish:function(){
  //   console.log("Happy Birthday");
  //   console.log("Read properly");
  // }, why we are commenting means in structured cloning the functions will not copy.
};

let student2 = structuredClone(student);
console.log(student1);
student2.name = "john jigiri";
console.log(student2.name);
console.log(student2);
student2.address.city = "Palasa,kasibugga";
console.log(student1.address.city);//
console.log(student2.address.city);