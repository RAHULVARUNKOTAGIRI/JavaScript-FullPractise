/*

let marks;//declaration
marks = 80;//intialization

let marks1 = 80;//declaration and intialization


let sureshAgee;
console.log("After declaration",sureshAgee);
sureshAgee = 22;
console.log("After intialization",sureshAgee);



//An execution context is the environment in which javascript code is executed.==>Execution contexts are created whenever javascript runs or function

/*
1)global execution context(GEC)
==>Automatically
2)Function Execution Context(FEC)
3)Eval Execution Context(EEC)

*/
/*
let sureshAge,hareeshAge,nareshAge;
let thankyouMessage = function(){//this is function expression
  console.log("Thank you for answering");
  console.log("Please subscribe tou our channel");
}//but if we write like this we will get declaration error so we need to write above the fucntion call

sureshAge = prompt(`Suresh,What is you age`);
console.log(`suresh age is:${sureshAge}`)
thankYouMessage();
//console.log("Thankyou for answering");
//console.log("Please subscribe tou our channel");

hareeshAge = prompt(`hareesh,What is you age`);
console.log(`naresh age is:${hareeshAge}`)
thankYouMessage();
//console.log("Thankyou for answering");
//console.log("Please subscribe tou our channel");

nareshAge = prompt(`naresh,What is you age`);
console.log(`naresh age is:${nareshAge}`)
thankYouMessage();
//console.log("Thankyou for answering");
//console.log("Please subscribe tou our channel");

//function thankYouMessage(){ this is fuction declaration
  //console.log("Thankyou for answering");
  //console.log("Please subscribe tou our channel");
//}

*/





/*

//Passing parameters

let RahulAge,AkhilAge,SumanthAge;

RahulAge = prompt(`Rahul,What is you age`);
thankYouMessage("Rahul",RahulAge);

AkhilAge = prompt(`Akhil,What is you age`);
thankYouMessage("Akhil",AkhilAge);

SumanthAge = prompt(`Sumanth,What is you age`);
thankYouMessage("Sumanth",SumanthAge);

function thankYouMessage(name,age){ 
  console.log(`${name} age is: ${age||"Not Entered"}`)
  console.log("Thankyou for answering");
  console.log("Please subscribe to our channel");
}

*/


let RahulAge,AkhilAge,SumanthAge;
let currentTotalAge = 0;

RahulAge = +prompt(`Rahul,What is you age`);
thankYouMessage("Rahul",RahulAge);

AkhilAge = +prompt(`Akhil,What is you age`);
thankYouMessage("Akhil",AkhilAge);

SumanthAge = +prompt(`Sumanth,What is you age`);
thankYouMessage("Sumanth",SumanthAge);

function thankYouMessage(name,age){ 
  console.log(`${name} age is: ${age||"Not Entered"}`);
  currentTotalAge = currentTotalAge+age;
  let eligibleForDL = age>18;
  if(eligibleForDl){
    console.log(`${name},You will get driving license`);
  }else{
    console.log(`{name},You need to wait for ${18-age} more years to getdriving license`)
  }

  console.log(`Current tiotal age is:${currentTotalAge}`)
  console.log("Thankyou for answering");
  if(eligibleForDL){
  console.log("Please subscribe to our channel");
  }
}





