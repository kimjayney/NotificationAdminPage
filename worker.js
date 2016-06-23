var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
numCPUs = numCPUs / 2;

if (cluster.isMaster) {
   for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
   }
   cluster.on('exit', function(worker, code, signal) {
      console.log('Worker ' + worker.process.pid + ' died.');
   });
} else {
	var web_worker = require("./express_worker");
	var db_worker = require("./db_worker");
}
