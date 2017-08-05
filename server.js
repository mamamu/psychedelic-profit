
////////////////////////////
//get the headers from the request
//pass them to the header module
///////////////////////////


var hm = require('./headermodule.js');
var http =  require('http');
var url = require('url');

http.createServer(function(request, response) {  
  const { headers } = request;  
  response.writeHead(200, {"Content-Type": "application/json"});    
  response.end(hm(headers)); 
  
}).listen(process.env.PORT);

