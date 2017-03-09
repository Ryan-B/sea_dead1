var Decline = mongoose.model('Decline');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Declines - Index")
			Decline.find({}, function(err, declines){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(declines);
					response.json(declines);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Declines - Create', request.body)
			var decline = new Decline;
			decline.last_name = request.body.last_name;
			decline.first_name = request.body.first_name;
			decline.email = request.body.email;
			decline.message = request.body.message;
			decline.save(function(err){
				if(err){
					console.log(err);
					response.json({status:"false"});
				}
				else{
					response.json({status:"true"});
				}
			})
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Declines - destroy")
			Decline.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}

	}
})();