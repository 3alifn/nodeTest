

const num= [8, 5, 3, 10, 1, 9 ]
Math.max(...num) // const print= Math.max.apply(null, num)

function max(num){
let max= -Infinity;
let i=0;
do{
    if(max<num[i]){
        max=num[i];
    }
    i++;
}
while(i<num.length)

return max
} // return maximum number

const printEach= num.forEach((nm, inx, arr)=>{

  return nm
}) // no return value

const printMap= num.map((nm, inx, arr)=>{
    return nm
}) // return with value

const printFilter= num.filter((nm, inx, arr)=>{
return nm > 5;
}) // return filter value

const printFind= num.find((nm, inx, arr)=>{
return nm > 5;
}) // return just one value

const findIndex= num.findIndex((nm, inx, arr)=>{
    return nm == 10;
    }) // return index position

num.toSpliced(findIndex, 1, 100) // replace specific array index

const printReduce= num.reduce((prevNum, currentNum, currentInx)=>{
    return prevNum+currentNum
}) // return total value


for( let x of num){
    console.log(x);
    
} // use for only array print

for( let x in num){
       console.log(num[x]);
        
 } // use for obj and array print

for (let x in obj){
    console.log(obj[x]);
    
} // object destructor

const newObj= {}
Object.assign(newObj, obj) // assign and copy obj to newObj

const x= Object.create(obj) // set new variable

var food= ['apple', 'banana', 'kiwi', 'watermelon', 'mango'];
var numa= [2, 4, 6, 8]
var numb= [[1, 3], [5, 7], [9]];
var obj= {num1: 10, num2: 15}
var newNum= new Array();
var newObj2= new Object();
var out= ''

var keys= Object.keys(obj)
var val= Object.values(obj)
newNum.push(keys, val)

numa.forEach((item, index)=>{
    newObj2[index]=item;
})
