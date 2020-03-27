//This is a module to demonstrate the creating an http server
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello welcome to the root page /');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }

});

server.listen(3000);

console.log('listening on port 3000');
