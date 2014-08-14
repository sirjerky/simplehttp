var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("Server created");
	fs.readFile('index.html', function(err, data){
		if(err) throw err;
		res.writeHead(200, {"Content-Type": 'text/html'});
		res.write(data);
		res.end();
	})
});

server.listen(3000, function(){
	console.log("Server started on port 3000");
});