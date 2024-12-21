function start(param){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('promise start now...');
        if(param) resolve(true)
            else reject('you have not start true param')
       }, 2000)
  })

}

function ready(param){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('promise ready now...');
            if(param) resolve(true)
                else reject('you have not ready true param')
           }, 3000)
      })
    

}

function end(param){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('promise done...');
            if(param) resolve('promise completed')
                else reject('you have not end true param')
           }, 1000)
      })
    
      

}

start(true).then((data)=>{
    return ready(data)
}).then((data)=>{
    return end(data)
}).then((result)=>{
    console.log(result);
    
}).catch((Error)=>{
    console.log(Error);
    
}).finally(()=>{
    console.log('exit[]');
    
})


const promise1= new Promise((resolve, reject)=>{
   return setTimeout(() => {
    resolve('promise 1')
   }, 2000);
})
const promise2= Promise.resolve('promise 2')
const promise3= function pro(){
    return new Promise((resolve, reject)=>{
       reject('custom error')
       
    })
}


async function promiseEmit(){
try{
const p1= await promise1;
const p2= await promise2;
const result= await promise3();
console.log(result);

} catch(err){
    console.log('Error: '+ err);

} finally{

    console.log('promise exit[]');

}
}

promiseEmit()

promise1
.then((data)=>{
    return promise2
})
.then((data)=>{
return promise3()
})
.then((result)=>{
    console.log(result);
    
}).catch((err)=>{
    console.log("Error: " +err);
    
}).finally(()=>{
    console.log('promise exit[]');
    
})


Promise.allSettled([promise1, promise2, promise3()]).then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>{
    console.log('thanks for use promise');

})


