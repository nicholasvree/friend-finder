// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friendsData = require('./app/data/friendsdata.js')
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)




app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
