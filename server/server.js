const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const parser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');

const app = express();

const server = http.createServer(app)
const io = socketIo(server)

const router = require('./router.js');

let port = 9001;
// let port = 3306;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));  //false
app.use(express.static(path.resolve(__dirname, '../client')));


io.on('connection', socket =>{
  socket.on('message', body => {
    console.log('this is body =============== ',body)
    socket.broadcast.emit('message', {
      body: body[1],
      from: body[0]
    })
  })
})

server.listen(9002)

app.use('/main', router);
app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})

