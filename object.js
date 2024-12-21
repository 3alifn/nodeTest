// Declare new object.........
const obj = { name: 'bean', age: 56, gender: 'male' };

obj.personInfo = function() {
  const gtype = this.gender.toLowerCase() === 'male' ? 'He' : this.gender.toLowerCase() === 'female' ? 'She' : 'He/She';
  return `Name is ${this.name} and ${gtype} is ${this.age} years old`;
};

console.log(obj.personInfo());



try{
switch(obj.name){
case 'bean': var res = 'Bean is a funny man';
break;
default: throw new Array('Bean was not find...')
}
console.log(res);

}
catch(err){
    console.log(err);
    
}


for(let x in obj){
    console.log(x, obj[x])
}

const objEntries= Object.entries(obj)[0][1] // convert obj to array
const objKeys= Object.keys(obj) // convert obj to array
const objValues= Object.values(obj)

