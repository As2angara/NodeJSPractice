//To improve modularity and extensibility
//Generally, the event emitter object isnt used directly

const EventEmitter = require('events');

class Logger extends EventEmitter {

    //define methods of this function
    log(urlObj) {
        this.emit('urlLogged', urlObj);
    }

}

module.exports = Logger;
