const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');

const app = express();

const router = require('./router.js');

// let port = 9001;
let port = 3306;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));


app.use('/main', router);
app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})

