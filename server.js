var express = require('express');

var app = express();

// Serve static files
app.use('/', express.static(__dirname + "/"));

// Serve application API
/*
app.get('/api/login', function(req, res){
	// Query the database for that ID and send the response
	res.jsonp({ user: 'Chandra' });
});
*/

app.listen(9000);

console.log("Listening on port 9000...");