// Dependencies
// ================================================================================
var friendData = require("../data/friends");

var path = require("path");
var fs = require("fs");

// And now, for the API routes
// ================================================================================
module.exports = function (app) {
	app.get("/api/friends", function (req, res) {
		res.sendFile(path.join(__dirname, "../data/friends.js"))
	})

	app.post("/api/friends", function (req, res) {
		var newFriend = req.body;
		var reducer = function (accumulator, currentValue) {
			accumulator + currentValue;
		}
		var current = 50;
		var index = 0

		for (var i = 0; i < friendData.length; i++) {
			var test = newFriend.scores.reduce(reducer) - friendData[i].scores.reduce(reducer);
			if (test < 0) {
				test = test * -1;
			}
			if (test < current) {
				current = test;
				index = 1;
			}

		}

		var bestFriend = friendData[index];
		res.send(JSON.stringify.push(bestFriend));
		friendData.push(req.body);
		fs.writeFile('./app/data/friends.js', `const friendsArray = ${JSON.stringify(friendsArray)}; \nmodule.exports = friendsArray`, function(err) {
      if (err) throw err;
    });
	})






}