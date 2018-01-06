const express = require('express');
const fs = require('fs');
var mongoose = require('mongoose');
const config = require('./config.json');

var app = express();
var http = require('http').Server(app);
// var io = require('socket.io')(http);
app.use(express.static(__dirname));
// var num_player = 0;
// var num_room = 1;
mongoose.connect(config.connectionString, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connect success');
  }
});

const port = process.env.PORT || config.port;
http.listen(port, function () {
  console.log('Server started. Listening on *:6969');
});
