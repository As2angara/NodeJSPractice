
// ---------- Modules

//To ensure scope of variables, modules are implemented
//Variables remain within the scope of the module
//A module in JS is just one JS file
//ex:

var url = "http://pixelhouse.ca/log";

function log(message) {
    console.log(message);
    console.log(__filename);
    console.log(__dirname);
    console.log(module);
}

//Because each module calls an immediately invoke function, we have access to certain variables
//the IIF signature:
// ( function (exports, require, module, __filename, __dirname) {} )
//we will console log some of these variables in log() ^^


module.exports.messageLogger = log;

//to export just the function
    //module.exports = log;

//the variable url and the function log are ony visible to this module unless it is exported (line 15)




