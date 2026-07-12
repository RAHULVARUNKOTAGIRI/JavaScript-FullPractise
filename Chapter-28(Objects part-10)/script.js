//Symbols as Keys

"user strict"
const name1 = String("suresh");
const name2 = String("suresh");
console.log(name1==name2)

const sym1 = Symbol("Rahul")
console.log(sym1);
const sym2 = Symbol("Rahul")
console.log(sym2);
console.log(sym1 === sym2);//it will return false because the symbols has unique id .Like you will think we are using object so that the refernce id will be different no that's not right you can check the above string example. 

const obj = {
  fullName: name1,
  [sym1]: "value1",//we need to use square brackets or else it will convey like string
  [sym2]: "value2",
};
console.log(obj)
console.log(Object.keys(obj));// we dont get any
console.log(object.getOwnPropertyDescriptor(obj,sym1));//we are checking the enumerable part also we think it will be false but reality it is true only but here the main reason is using the symbols as key it will be more secure.
console.log(Object.getOwnPropertySymbols(obj));//to know which properties are used by symbol 

console.log(Reflect.ownKeys(obj));//To get all the properties in object even it is symbol also.