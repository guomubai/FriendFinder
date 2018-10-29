// Dependencies
// ================================================================================
var express = require("express");
var path = require("path");

var app = express();


// Port
// ================================================================================
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
// The below are the routes that the server responds to
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// The below is for our server to listen
// ================================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
