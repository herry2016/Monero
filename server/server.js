const express = require('express');
const parser = require('body-parser');
const path = require('path');
// Alex Test
// My code is here
const db = require('../database/db.js');

const app = express();
const router = express.Router();

port = 9001;
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')))
  // .use('/main', routes)
app.get('/*', (req, res) => {
    res.send('This is the wildcard endpoint')
  })

//this is a test



// app.use('/main', router);
app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})