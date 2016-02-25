var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', function(socket){
  socket.on('channel message', function(msg){
  	var channel = msg.channel;
  	console.log("get message from channel [" + channel + "]: " + msg.text);
    io.emit('channel message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
