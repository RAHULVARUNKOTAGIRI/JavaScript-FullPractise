//Number data type in JavaScript


let age = 30;
let percentage = 89.67;
console.log(typeof age);
console.log(typeof percentage);

age = age-10;
console.log(age);
console.log(2**3); //exponentiation operator

let marks = 9007199254740991;//2**53-1 maximum safe number
console.log(marks);
marks = marks + 1;
console.log(marks);//when we add 1 to the marks it does not change because it is the maximum safe integer in JavaScript.

console.log(Number.MAX_SAFE_INTEGER);//maximum safe number inbuilt 
console.log(Number.MIN_SAFE_INTEGER);//minimum safe number inbuilt




//64 bits
console.log(Number.MAX_VALUE)//maximum value that can be represented in JavaScript
console.log(Number.MIN_VALUE)//minimum value that can be represented in JavaScript





//Infinity
console.log(1/0);//Infinity
console.log(typeof Infinity);//Infinity is a number in JavaScript





//Nan=not a number
console.log("Hello"/2);//NaN
console.log(typeof NaN);//NaN is also a number in JavaScript
console.log("suresh"/11);//NaN
console.log("30"/2);//15, JavaScript converts the string to a number and performs the division==>type conversion
console.log(NaN**0);//1
console.log(typeof "suresh"/11);//NaN, because the typeof operator has higher precedence than the division operator, so it evaluates typeof "suresh" first, which returns "string". Then it tries to divide "string" by 11, which results in NaN.





//Built-in objects for printing numbers in different formats
let mathmarks = 80;
console.log(mathmarks);
let englishmarks = Number(85);
console.log(englishmarks);
let socialmarks = new Number(90);
console.log(socialmarks); //it will print like object representattion of the number









//bigint data type in JavaScript
let noOfLikes = 9007199254740991n;//2**53-1 maximum safe number in 
console.log(typeof noOfLikes);
//noOfLikes = noOfLikes + 1;
console.log(noOfLikes);//IT GIVES ERROR BECAUSE WE CANNOT ADD A BIGINT TO A NUMBER
//THE ACTUAL WAY WAS
noOfLikes = noOfLikes + 1n;//we have to add a bigint to a bigint
console.log(noOfLikes);//9007199254740992n

//Built object = BigInt
let noof = BigInt(9007199254740991);//converting a number to a bigint using the BigInt function
console.log(noof);
let noofLikesFromIntToNumber = Number(noof);//converting a bigint to a number using the Number function 


//Trick  converting string to number
let str = "123";
console.log(typeof str);
let num = +str;//using the unary plus operator to convert a string to a number









//Boolean data type in JavaScript

let isLoggedIn = true;
console.log(typeof isLoggedIn);

if(isLoggedIn){
    console.log("User is logged in");
}else{
    console.log("User is not logged in");
}
let isLoggedOut = Boolean();
console.log(isLoggedOut);//false because the Boolean function without any argument returns false








//String data type in JavaScript
//String is collection of zero or more characters.characters ca be anything
let myName = `Suresh Yadam ${age}`;//template literals
console.log(myName);

let myName2 = new String('Suresh Yadam');
console.log(myName2);//it will print like object representattion of the string.When ever we use the new Keyword u will get the object representation.








//undefined data type in JavaScript
let dabba;
console.log(dabba);//undefined because we have not assigned any value to the variable dabba
dabba = 10;
console.log(dabba);//10 because we have assigned a value to the variable dabba

//can we assign undefined to a variable
let box = undefined;
console.log(box);//No the it is javasript engine work we are not here to do TaskPriorityChangeEvent.

//There is no builtin objects are there for undefined.








//Null data type in JavaScript
let emptyBox;
console.log(emptyBox);
emptyBox = null;
console.log(emptyBox);//null because we have assigned null to the variable emptyBox 

//if we dont want to assign the values to the variable we can assign null to the variable .we dont use the undefined because it is used by javascript engine.










//Symbol data type in JavaScript
let sym1 = Symbol("id");
console.log(sym1);//it prints like Symbol(id) because it is a unique identifier and it is not equal to any other symbol even if they have the same description.
let sym2 = Symbol("id");
console.log(sym2.description);//it will print the description of the symbol which is "id"
