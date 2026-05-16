/*
Comparison Operators
1)Relational operators(4)==> <,>,<=,>=
2)Equality and Inequality operators(2)==> ==,!=
3)Strict Equality and Inequality operators(2)==> ===,!==
*/


//1)string comparion
console.log("Crocodile">"Parrot");//false
console
console.log("A">"Z");//false
console.log("Suresh">"Surya");//true
console.log("kangu">"Kanguva");//true



//When comparing values of different types,javascript converts the values to numbers
console.log("1"<4);//true beacuse "1" is converted to 1 and then compared with 4
console.log(10>false);//false
console.log("hi"==true);//false because "hi" is converted to NaN and true is converted to 1 
console.log("1"==null);//false
console.log(1>"suresh");//false
console.log("1">undefined);//false


//NaN(Not a Number)
console.log(1>NaN);//false
console.log(1<NaN);//false
console.log(1==NaN);//false
console.log(1<=NaN);//false
console.log(1>=NaN);//false

//NaN is the not equal to any value,including itself
console.log(NaN==NaN);//false
console.log(NaN>NaN);//false
console.log(NaN>=NaN);//false
console.log(NaN<NaN);//false
console.log(NaN<=NaN);//false



//null and undefined operator     
//==>important point null and undefined are only equal to each other and not equal to any other value when it is compared using the equality operator(==)

console.log(null>0);//false beacause null is converted to 0 and then compared with 0
console.log(null==0);//false because null is only equal to undefined and not equal to any other value
console.log(null>=0);//true because null is converted to 0 and then compared with 0