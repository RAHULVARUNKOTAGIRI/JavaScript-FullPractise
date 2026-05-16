let num1 =2
let num2 =3
console.log("Addittion",num1+num2);
console.log("subtraction",num1-num2);
console.log("multiplication",num1*num2);

console.log("division",num1/num2);// it will give the quotient of the division
console.log("modulus",num1%num2);// it will give the remainder of the division
console.log("exponentiation",num1**num2);


//Another program
let a = 10;
let b = 3;
console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
console.log("a/b",a/b);
console.log("a%b",a%b);
console.log("a**b",a**b);
console.log((a+b)**(1/2)); // it will give the square root of the sum of a and b
console.log((a+b+11)**(1/3)); // it will give the cube root of the sum of a, b, and 11
console.log((a+b)**(1/4)); // it will give the fourth root of the sum of a and b


console.log(7/3);//it will print 2.3333333333333335  to avoid that such number we use toFixed() method which will round the number to the specified number of decimal places
console.log((7/3).toFixed(2));// it will print 2.33 because it will round the number to 2 decimal places

let fNmae = "suresh";
let lName = "kumar";
console.log("full name",fNmae+lName);//here the + operator is used for string concatenation which will join the two strings together


 

let number1 = "10";
let number2 = 20;
console.log(number1*number2)//it will print 200 because the * operator will convert the string "10" to a number and then perform the multiplication
console.log(number1+number2);// it will print "1020" because the + operator will perform string concatenation when one of the operands is a string



console.log(10+"10");//1010
console.log(10-"10");//0
console.log("sur"+143);//sur143
console.log("sur"-143);// it will print NaN because the - operator cannot perform string concatenation and it cannot convert the string "sur" to a number
console.log(50+"fifty");//50fifty
console.log("20"+"20");//2020
console.log(20+20);//40


//Associativity of operators
console.log(4+1+"3");//53
console.log("3"+4+1);//341
console.log(2**2**3)// it will print 256 because the exponentiation operator is right associative which means it will evaluate from right to left so it will first evaluate 2**3 which is 8 and then it will evaluate 2**8 which is 256


//presedecy og operators and associativity of operators.Link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence


//The other way to convert a string to a number is by using the unary plus operator which is a shorthand for the Number() function

let n = 10;
let m = 5;
let result;
result = n-m;
console.log(result);//5
console.log((result = n-m));//5



//Chaining assignment operators
let num1,num2,num3;
num1 = num2 = num3 = 2 * 2 + 3;
console.log(num1,num2,num3);// 7 7 7

let num1,num2,num3;
num3 = 2*2+3;
num1 = num3;
num2 = num3;
console.log(num1,num2,num3);// 7 7 7


//==>In post and Pre increment and decresing .It chane the values when it assign to a variable only it can perform on variables not on directly numbers it will give error 