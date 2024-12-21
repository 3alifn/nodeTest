// import {def, xnull, demoText} from "./export.js" // use for direct exporter ES6
// const {xnull, demoText}= require("./export.js") // use for commonJS direct exporter

const obj= new Object({name: 'bean', age: 56}); // declare new object
const arr= new Array(10, 20, 30); // declare new array
const demoText= "Hello demo text";
const xnull= null;


// ES6 js/ mjs module exports
export function def(){
    console.log('hello def');
    
} // use for mjs single export 



export {demoText, xnull} // use for mjs multiple export



// common js/ cjs module exports
module.export = {
    def: function(){
    console.log('hello def');
    
}, // use for cjs single export 

 def2: function(){
    console.log('hello def2');
    
} // use for cjs single export
}

module.exports = {demoText, xnull} // use for cjs multiple export