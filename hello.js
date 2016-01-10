var http = require('http');

http.createServer(function (req, res) {
  res.writeHeader(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8888, '166.78.104.252');

console.log('Server running at http://localhost');
