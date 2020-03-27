
//Continuing from lesson 1: We can extract these modules like so

const logger = require('./modules_lesson1');

logger.messageLogger("Hello");

//if only the function were exported
    //logger("hello");

//Node has several built in modules for ex:
const path = require('path');
const os = require('os');
const EventEmitter = require('events') //note that the const name is capital to denote a class

var pathObj = path.parse(__filename);
console.log(pathObj);

var totalMem = os.totalmem();
var freeMem = os.freemem();
console.log(`Total Memory: ${totalMem}, Free Memory: ${freeMem}`);

const emitter = new EventEmitter();
//Register a listener
emitter.addListener('messageLogged', (arg) => {
    console.log('listener called', arg.id + " " + arg.url);
});
//Raise an event
emitter.emit('messageLogged', {id: 1, url: 'wwww'});


