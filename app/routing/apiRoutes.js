var path = require("path")

var friendsData = require('../data/friendsData.js')



module.exports = function(app) {

	app.get('/api/friends', function(req,res){
		console.log("check")
		res.json(friendsData)
	})

	//add a post route to push the data into friendsData

	app.post('/api/friends', function(req,res){
		//console.log(req.body)

		friendsData.push(req.body)

		//console.log(req.body.scores)
	// })

		console.log(friendsData)

		console.log("length", friendsData.length-1)

		var diffArray = [];

		for(var i = 0; i<(friendsData.length-1); i++){
				var indDiff = 0;
			for(var j = 0; j<10; j++){
				indDiff = indDiff + Math.abs(req.body.scores[j]-friendsData[i].scores[j])
				
			}
			diffArray.push(indDiff)
		}
	
   		var indexOfMin = diffArray.indexOf(Math.min.apply(Math, diffArray))

   		console.log(friendsData[indexOfMin].name)

   		res.json(friendsData[indexOfMin])


	})


}
