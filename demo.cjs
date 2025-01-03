const output= async function (){
   
    function input(param){
        return new Promise((resolve, reject)=>{
            resolve(param)
        })
    }

    const log= await input('Hello World')
      console.log(log);
    
}

const namex= 'Mr. Bean'

module.exports= {
    namex, output
}