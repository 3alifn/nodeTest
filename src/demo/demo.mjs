import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename= fileURLToPath(import.meta.url);
const __dirname= dirname(__filename);

export const output= async function (){
   
    function input(param){
        return new Promise((resolve, reject)=>{
            resolve(param)
        })
    }

    const log= await input('Hello World')
      console.log(log);
    
}
const print= 'mjs'
export default print
