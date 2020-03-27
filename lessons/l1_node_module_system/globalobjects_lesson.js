

//---------------------------Global Objects

//Several global objects in JS include
console.log();
setTimeout();
clearTimeout();

setInterval();
clearInterval(); //etc..

//In JS, the 'window' object is the global object, ex;
window.setInterval();

var message = "hello";

window.message;

//However, in NodeJS there is no 'window' object, instead 'global' is the global variable

global.setInterval();

var message = "hello";

console.log(global.message);
    //This would output undefined, because these variables are not added into the global variable
    //Their scope only belongs to the the file.

//NOTE: it is often easier to just state the functions

