import os from "node:os";
import fs from "node:fs";


console.log( os.version(), os.platform(), os.userInfo(), os.release());
fs.writeFile(os.homedir+'/Desktop/demo.txt', "hello demo data", (err, res)=>{
    if(err) console.log(err);
    else console.log('new file created');
    
    
})