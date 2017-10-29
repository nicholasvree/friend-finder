var express = require ("express")
var bodyParser = require("body-parser")
var path = require("path")

var  app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var friendsData = require('./app/data/friendsdata.js')
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)




var PORT = process.env.PORT || 8080;




app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
