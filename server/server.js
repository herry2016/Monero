const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');

const app = express();
const router = express.Router();

port = 9001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));


router.get('/', function(req, res) {
  res.json({message: 'Router api working'})
  
})

router.use(function(req, res, next) {
  console.log('Middleware router was ran');

  next();
});

router.route('/signup')
.post(function(req, res) {

let username = req.body.username;
let password = req.body.password;
let email = req.body.email;

  // let user; //Fill values from in from frontend
  // let mail;
  // let pass;
  db.Users.create({
    username: username,
    password: password,
    email: email,
    totalhashes: 0,
    totaltime: 0,
    totalamount: 0
  })
})
.get(function(req, res) {
  //render signup page
})



router.route('/login')
.post(function(req, res){ 
  //login authentication here
})
.get(function(req, res) {
  //render login page
})




app.use('/main', router);
app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})