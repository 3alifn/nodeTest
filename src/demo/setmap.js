const setData= new Set([]);

setData.add(100)
setData.add(101)
setData.add(102)

setData.forEach((nm, inx, arr)=>{
    console.log(nm);
}) // set use for unique value

const setMap= new Map();

setMap.set('a', 100)
setMap.set('b', 200)

const out= setMap.has('a')

console.log(out);


const myArr= [['name', 'John'], ['age', 30], ['city', 'Dhaka']];
const myObj= {a: 1, b: 2, c:3}
const newObj= {}
const newArr= [...Object.keys(myObj), ...Object.values(myObj)] // object to array converted

myArr.push(['gender', 'male'])
myArr.push(['lang', 'bnagla'])
const makreObj= Object.fromEntries(myArr); // // array to object converted by default method

myArr.forEach(([key, value]) => {
     newObj[key]=value;
    }); // array to object converted by forEach
