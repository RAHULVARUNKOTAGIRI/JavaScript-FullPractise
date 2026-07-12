//Object.keys(),Object.values(),Object.entries()


const user = {
  name: "john",
  age:25,
  country:'India',
};
const keys = Object.keys(user);
console.log(keys);
const values = Object.values(user);
console.log(values);
const entries = Object.entries(user);
console.log(entries);