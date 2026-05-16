 /*
 Variable hoisting

 ex:1 with var

 console.log(x);//undefined
 var x = 5;  //here x will go to the top  it will be made as undefined
 console.log(x);//5


 ex:2 with const,let

 console.log(y);
 let y = 10;//Y went to Temporal dead Zone.And we get error

  */

 /*
 Function Hoisting

 ex:1 with var and expression

 add();//here add will get undefined  and we get type error
 var add = function(){
 console.log("Addition!");
 }


 ex:2 with var inside a function

 function test(){

 console.log(a);// here we get undefined why beacuse here a will go to top there it was undefined//20
 var a = 20;
 console.log(a);

 }

 test();

  
 */