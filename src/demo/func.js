// function clouser.....
function func(){
let counter= 0;

return function increement(){
counter= counter+1;
return counter

}

}

const increement= new func()
console.log(increement());
console.log(increement());
console.log(increement());
// ................................

// function callback.......................
function sum(num1, num2, callback){
callback(num1+num2)
}

sum(5, 6, (result)=>{
    console.log(result);
    
})
// ...........................

// function constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  console.log(person1.getFullName()); // Output: John Doe
  console.log(person2.getFullName()); // Output: Jane Doe
  
  const person1 = new Person('John', 'Doe');
  const person2 = new Person('Jane', 'Doe');
  
  
(function(text="Hello World"){
  console.log(text);
  
}()) // invoke func / self call func

function textMe(text, callback){
  callback(text)
  }

  
const func= (print="Hello func")=> { return print;} // arrow function
const dType=  func instanceof Object;