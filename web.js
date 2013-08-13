var fs = require('fs')
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var filename = 'index.html';
	stringToWrite = fs.readFileSync(filename, 'utf-8');
	response.send(stringToWrite);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
