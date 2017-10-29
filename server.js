var express = require ("express")
var bodyParser = require("body-parser")
var path = require("path")

app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var friendsData = require('./app/data/friendsdata.js')
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)




var port = 8080;
var PORT = process.env.PORT || 3000;

	// app.get('/api/friends', function(req,res){

	// 	console.log("check")
	// 	res.json(friendsData)
	// })


app.listen(PORT, function() {
  console.log("App listening on PORT :" + PORT);
});


