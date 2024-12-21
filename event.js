 import {EventEmitter} from "node:events";
 const eventMaker= new EventEmitter();
 function delay(){
    console.log('event emit now....');
    
 }

 eventMaker.on('delay', delay);
 
 
setTimeout(() => {
    eventMaker.emit('delay')
}, 3000);

