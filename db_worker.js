var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
var db = mongoose.connection;

db.once("open", function callback() {
	console.log("Open");
});

var userSchema = mongoose.Schema({
	username : "String",
	password : "String", 
	age : "number"
});

var User = mongoose.model("User", userSchema);


exports.member = function() {
	return {
        add: function(_usr, _pw, _age) {
            var user1 = new User({username : _usr, password: _pw , age : _age });
			user1.save(function(err, user1) {
				if (err) {
					console.log("error");
					return "fail";
				} else {
					console.log("success");
					return "worked";
				}
			});
        }

    };
}