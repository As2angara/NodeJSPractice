const Logger = require('./modularityAndClasses_lesson1');
const logger = new Logger();

logger.addListener('urlLogged', (arg) => {
    console.log(arg);
})

var urlObj = {
    id: 1,
    url: 'http://pixelhouse'
}

logger.log(urlObj);
