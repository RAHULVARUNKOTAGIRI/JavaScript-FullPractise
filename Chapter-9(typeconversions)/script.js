/* primitive type conversions
1)implicit type convresions::Automatically done by the javascript engine
2)explicit type conversions::Done manually by the developer
*/


//1)stringconversion:
//builtin function::string(data)
let marks = 100;
let firstName = "suresh";
let cash = "1000";
let emptyString = "";
let isPassed = true;
let result;
let myvalue = null;
let bigValue = 500n;
let s1 = Symbol("id");

console.log("marks",marks);
console.log("firstName",firstName);
console.log("cash",cash);
console.log("emptyString",emptyString);
console.log("isPassed",isPassed);
console.log("result",result);
console.log("myvalue",myvalue);
console.log("bigValue",bigValue);
console.log("s1",s1);

let marksStr = String(marks);
let firstNameStr = String(firstName);
let cashStr = String(cash);
let emptyStringStr = String(emptyString);
let isPassedStr = String(isPassed);
let resultStr = String(result);
let myvalueStr = String(myvalue);
let bigValueStr = String(bigValue);
let s1Str = String(s1);

console.log("marksStr",marksStr);
console.log("firstNameStr",firstNameStr);
console.log("cashStr",cashStr);
console.log("emptyStringStr",emptyStringStr);
console.log("isPassedStr",isPassedStr);
console.log("resultStr",resultStr);
console.log("myvalueStr",myvalueStr);
console.log("bigValueStr",bigValueStr);
console.log("s1Str",s1Str);



//2)number conversion
//builtin function::Number(data)
let marksNum = Number(marks);
let firstNameNum = Number(firstName);
let cashNum = Number(cash);
let emptyStringNum = Number(emptyString);
let isPassedNum = Number(isPassed);
let resultNum = Number(result);
let myvalueNum = Number(myvalue);
let bigValueNum = Number(bigValue);
//let s1Num = Number(s1);

console.log("marksNum",marksNum);
console.log("firstNameNum",firstNameNum);// it will print NaN because "suresh" is not a valid number
console.log("cashNum",cashNum);
console.log("emptyStringNum",emptyStringNum);
console.log("isPassedNum",isPassedNum);// it will print 1 because true is converted to 1 and false is converted to 0
console.log("resultNum",resultNum);// it will print NaN because undefined is not a valid number
console.log("myvalueNum",myvalueNum);// it will print 0 because null is converted to 0
console.log("bigValueNum",bigValueNum);// it will print 500 because bigInt can be converted to number if it is within the range of number
//console.log("s1Num",s1Num);// it will print NaN because symbol cannot be converted to a number


console.log("true", Number(true));
console.log("false", Number(false));
console.log("undefined", Number(undefined));// it will print NaN because undefined is not a valid number
console.log("null", Number(null));//0 null is converted to 0
console.log("0", Number("0"));
console.log("number as string with spaces", Number("  123  "));// it will print 123 because "  123  " is a valid number we can convert when it is with only trailing and leading spces not but in the middle
console.log("number as string with spaces", Number("  1 2 3  "));// it will print NaN because "  1 2 3  " is not a valid number we can convert when it is with only trailing and leading spces not but in the middle
console.log("7 spaces", Number(       ));//it will print 0 because it is considered as an empty string which is converted to 0

//boolean conversion
//builtin function::Boolean(data)
//values that are intuitively empty become false when converted to boolean.Intuitevely empty values are0,empty string,undefined,null,NaN

let marksBool = Boolean(marks);
let firstNameBool = Boolean(firstName);
let cashBool = Boolean(cash);
let emptyStringBool = Boolean(emptyString);
let isPassedBool = Boolean(isPassed);
let resultBool = Boolean(result);
let myvalueBool = Boolean(myvalue);
let bigValueBool = Boolean(bigValue);
let s1Bool = Boolean(s1);


console.log("marksBool",marksBool);
console.log("firstNameBool",firstNameBool);
console.log("cashBool",cashBool);
console.log("emptyStringBool",emptyStringBool);
console.log("isPassedBool",isPassedBool);
console.log("resultBool",resultBool);
console.log("myvalueBool",myvalueBool);
console.log("bigValueBool",bigValueBool);
console.log("s1Bool",s1Bool);
