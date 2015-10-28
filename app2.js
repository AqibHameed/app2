// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Aqib Hameed\n");
  var fs = require('fs');
var data = fs.readFileSync('input.txt');
response.end(data.toString());
response.end("Program end\n");
});
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(1000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:1000/");
