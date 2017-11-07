const express = require('express');
const parser = require('body-parser');
const path = require('path');
// Alex Test
//My code is here
const db = require('../database/db.js');

const app = express();
const router = express.Router();

port = 9001;




router.get('/', function(req, res) {
  res.json({message: 'Router api working'})
})
router.use(function(req, res, next) {
  console.log('Middleware router was ran');
  next();
});

//this is a test



app.use('/api', router);
app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})