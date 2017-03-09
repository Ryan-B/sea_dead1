var express = require('express');
var app = express();
var port = process.env.PORT || 1991;
var server = app.listen(port, function(){
	console.log("Hello at 1991");
});

//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// set up a static file server that points to the "client" directory
app.use(express.static(__dirname+'/static'));

//Mongoose
require('./server/config/mongoose.js');
//HTTP Routes
require('./server/config/routes.js')(app);

var io = require('socket.io').listen(server);

var users = [];
var messages = [];

io.sockets.on('connection', function(socket) {
	console.log("Socket connected with id: ", socket.id);
	
	socket.on('newUser', function(data){
		users.push({ 
			name: data.name, 
			socket_id: socket.id
		})
		// console.log(users);
		io.emit('updateUserList', users);
		io.emit('updateMessageList', messages);

	});

	socket.on('newMessage', function(data){
		messages.push("<p>"+data.name+": "+data.message+"</p>")
		if(messages.length > 50){
			messages.splice(0,5);
		}
		io.emit('updateMessageList', messages);
	})
			

	socket.on('disconnect', function() {
		console.log("Socket disconnected with id: ", socket.id);
		for(index in users){
			if(users[index].socket_id === socket.id){
				users.splice(index, 1);
				io.emit('updateUserList', users);
				break;
			}
		}
	});
});