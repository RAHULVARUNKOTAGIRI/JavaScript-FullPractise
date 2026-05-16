 /*let username = prompt("What is your name?"); // it will show a prompt box to the user and ask for input and store that input in the variable username
 console.log(username); // it will print the value
 console.log(`Welcome,${username}.please enjoy the course`);

 prompt("What is your name?", "Guest");//it will show the default value "Guest" in the prompt box
*/




 /*
 let alertMsg = alert("Welcome to suresh techs");
 let consoleMsg = console.log(alertMsg);
 console.log(consoleMsg);// it will print undefined because alert does not return any value, it just shows a message to the user.
 */

 let username = prompt("what is you name?");
 console.log(`Welcome, ${username}. Please enjoy the course!`);
 let height = prompt("What is your height in cm?");
 let weight = prompt("What is your weight in kg?");

 console.log(typeof height);
 console.log(typeof weight);

 console.log("height",height);
 console.log("weight",weight);

let heightInNumber = Number(height);
let weightInNumber = Number(weight);

console.log(heightInNumber + 10);
let heightInMeters = heightInNumber / 100;

let bmi = weightInNumber / (heightInMeters**2).toFixed(2);
console.log(+bmi);

/*
if(bmi<18.5){
  console.log("Thin");
}
else if(bmi>25){
  console.log("Fat");
}
else{
  console.log("Normal");
}
*/
//By ternary Operation
bmi<18.5
?console.log("Thin")
:bmi>25
?console.log("Fat")
:console.log("Normal");