import fs from "node:fs";
import * as path  from "node:path";
import { fileURLToPath } from 'url'; 
import { dirname } from 'path'; 
import { createRequire } from 'module'; 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename);

const dir= './public/';
const file= './public/demo.txt';

path.relative(file, file) // return file1 to file2 distance
path.resolve() // return current working directory
path.join(file, file) // merge 2two files path


fs.realpath(file, (err, info)=>{
    if(err) console.error(err);
    else console.log(info);
    
    
    
})

fs.writeFile(path.join(dir, 'test.txt'), "we", (err)=>{
    if(err) console.error(err);
    else console.log('worked...');
    
    
})

fs.watchFile(file, (curr, prev) => { 
    console.log('File Changed'); 
    console.log('Previous Modified Time:', prev.mtime); 
    console.log('Current Modified Time:', curr.mtime);
 });


 fs.watch(file, (eventType, filename) => { 
    if (filename) { 
        console.log(`${filename} ${eventType}`);
     } });

fs.stat(path.join(__dirname, file), (err, info)=>{
    if(err) console.error(err);
    else console.log(info);
    
    
})



fs.access('/jyfuyf', (err, info)=>{
    if(err) console.error(err);
    else console.log(true);
    
    
    
})

const filePath= path.join(__dirname, '/public/new.txt');


(async function(){
 
    try{
       const created= await fs.promises.writeFile(filePath, 'Hello, how are you?')

       console.log('file created...');

        
        const data=  await fs.promises.readFile(filePath, 'utf8')
        
        console.log(data);
        
    }catch(err){
   console.log(err);
   
    }

})()


function createFile(path, content){
    return new Promise((resolve, reject)=>{
        console.log('file creating....');
        
        setTimeout(()=>{
            fs.writeFile(path, content, (err)=>{
                if(err) reject(err)
                    else resolve(path)
            })
    }, 3000)

 })
}

function readFile(path){
    console.log('file reading....');
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        fs.readFile(path, 'utf-8', (err, data)=>{
            if(err) reject(err)
                else resolve(data)
        })
    }, 3000)
   })
}

createFile(filePath, "Hello World")
.then((data)=>{
    return readFile(data)
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log('my error: '+err);
    
}).finally(()=>{
    console.log('exit....');
})