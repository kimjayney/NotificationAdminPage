var express = require('express');
var app = express();
var db_worker = require("./db_worker")

var server = app.listen(50254, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("push app listening at http://%s:%s", host, port)
});

app.get("/", function(req, res,next) {
	res.send("Main");		
});

app.get("/test", function(req,res,next) {
	var result = db_worker.member().add("rainc","sdfsd",121);
	if (result) {
		res.send("Success");
	} else {
		res.send(result);
	}
});