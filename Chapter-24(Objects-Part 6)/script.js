let dhoni ={
  name:"Mhendra Singh Dhoni",
  Age:42,
  iscaptaincool:true,
  Teams: ["India,csk"],
  Statistics:{
    Matches:538,
    Runs: 17266,
    Centuries: 16,
  },
  retire: function(){
    return `${this.name} retired from international cricket in 2020`;
  },
};

console.log(dhoni.retire());
console.log(dhoni.name);
console.log(dhoni.Statistics.Runs);
console.log(dhoni.Teams[0]);






// Task-02
const calculator = {
  add: function(a,b){
    return a+b;
  },
  subtract: function(a,b){
    return a-b;
  },
  multiply(a,b){//shorthand syntax
    return a*b;
  },
};
console.log(calculator.add(5,3));



//Task -03
let friends = ["vishnu","murali"];
console.log(friends);
friends.push("samhita");
console.log(friends);


const library = {
  name: "Rahul",
  books: [],
  totalBooks: 0,
  addBook: function (title){
    this.books.push(title);
    this.totalBooks = this.totalBooks+1;
  },
}
library.addBook("Python 11 hours");
library.addBook("c Programming 18 hours");
library.addBook("javascript 25 hours");

console.log(library.books);
console.log(library.totalBooks);