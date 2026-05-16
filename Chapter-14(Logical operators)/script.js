//Logical and operator
let username = prompt("Enter your username")
let password = prompt("enter your password");

if(username == "suresh" && password == "12345"){
    console.log("Welcome to instagram");
  }
  else{
    console.log("Invalid credentials");
  }

console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false

/*

1)Evalutes operands from left to right
2)For each operand,converts it to a boolean.if the result is false ,stops and return the original value of that operand
3)if all the operands have been evaluated
(return true),returns the last operand

*/

let result = 100 && 80
console.log("result",result);

let result1 = 100 && 80 && 10 && "suresh" && 0;
console.log("result",result1);
if(result1){
  console.log("Good");
}//0

let math = 27;
let social = 32;
let science = 23;
let telugu = 46;
let english = 29;


if(math>=35 && social>=35 && science>=35 && telugu >=35 && english>=35){
  console.log("you can bu the cycle");
}else{
  console.log("you failed in all the subjects");
}



/*
2)|| operator
==>Evaluates operands from left to right
==>For each operand ,converts it to boolean .if the result is true,stops and returns the orginal value of that operand
==>if all the operands have been evaluated (returned false),returns the last operand
*/
let result2 = 100||80||10||"suresh"||0;
console.log("result",result2);//100
if(result){
  console.log("Good");//Good
}

let result3 = null||undefined;
console.log("result",result);//undefined
if(result){
  console.log("Good");//not executed
}



// Nullish Coalescing Operator (??)

/*
==>first it checks is this are null and undefined values.
1) Returns the right side value only when the left side value is null or undefined

2) If the left side contains any other value like 0, false, "",it returns the left side value itself
*/

console.log(0??10);
console.log(false??20);
console.log(5??20);
console.log(null ?? 10);
console.log(undefined ?? 20);
console.log(0 ?? null);


console.log(0 && "suresh");
console.log(0||"suresh");
console.log(0??"suresh")

/*
Boolean(false)      // false   Boolean(1)          // true
Boolean(0)          // false   Boolean("hello")    // true
Boolean(-0)         // false   Boolean([])         // true
Boolean(0n)         // false   Boolean({})         // true
Boolean("")         // false   Boolean("false")    // true
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(NaN)        // false
*/



//Unary not operator

//==>inversing the boolean values
let isPassed  = true;
console.log("isPassed",isPassed);//true
console.log("isPassed",!isPassed);//false

let marks = 10;
let marks1 = !marks;
console.log("marks",marks1);//false


//double unary not operator
let marks = 0;
let result = !!marks;
console.log("result",result);//false




console.log(null+1);//it returns 1 because it converts null to 0
console.log(undefined+1);//here we will get NaN beacuse it converts the undefined values to NaN.so if we performed the any operation on NaN it wiil give the NaN only.
console.log(NaN==NaN);//false when NaN is compared with NaN also it will return the false.