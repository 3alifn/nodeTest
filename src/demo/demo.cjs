let food= new Map();
let phone= new Set();

food.set('a', 'apple')
food.set('b', 'banana')
food.set('c', 'coconut')
food.set('c', 'coconut')

phone.add('nokia')
phone.add('blackberry')
phone.add('iphone')
phone.add('samsung')
phone.add('samsung')

const arr= ['banana', 'apple', 'coconut', 'watermelon'];
const obj= {a: 'apple', b: 'banana', c: 'coconut'};

const printArrMap= arr.map((val, index, arr)=>{
   return val;
    
})

const printArrSome= arr.some((val)=>{
   return  val == 'apple'
   
})

const printArrFind= arr.find((val)=>{
return val == 'apple'

})

const printArrSort= arr.sort((a, b)=>{
   return b - a;
})

const pArrIn= arr.includes('apple')

const pArrFlat= arr.flatMap((val, inx )=>{
    return [inx, val]
    
})

const pArrReduce= arr.reduce((prev, curr)=>{
    var x= ''
    x= prev+ ' '+ curr;
    return x;
})

// for(const x of arr){
//     console.log(x); 
// }

let newArr= [];
let newObj= {};

// arr.forEach((val, index)=>{
//     newObj[index]= val;
// })
// 
// 
// arr.reduce((prev, curr)=>{
//     newObj[prev||'x']= curr;
// })

function maxNumber(numbers, callback){
const output= Math.max.apply(null, numbers);
callback(output);
}


maxNumber([1, 3, 5, 7, 9], (res)=>{
    console.log(res);
    
})


class Parents {
    #password= '123'
    email= '123@mail.com';
    static x (){
        return "HI, What's up?"
    }
    getName(){
        return `your parent email is ${this.email} $ password is ${this.#password}`
    } 
}

class Childs extends Parents {
    constructor(name){
        super()
    this.pname= name;
    }

    getParent(){
        console.log(super.getName());
        

        return `your parent email is ${this.pname}`
    }

}

const child= new Childs('X')

console.log(child.getParent());
