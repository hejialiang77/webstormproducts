var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hello dddddd');
}).listen(8888);
console.log('server running 8888');
