const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');

const app = express();
const router = express.Router();

let port = 9001;

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

// console.log(username)
// console.log(password)
// console.log(email)

  let userFound = false;
  db.Users.findAll().then(user => {
    if(user.username === req.body.username && user.password === req.body.password){
      userFound = true;
    }
  })
  
  if(userFound){
    res.send(false);
  } else {
    
    db.Users.create({
    username: username,
    password: password,
    email: email,
    totalhashes: 0,
    totaltime: 0,
    totalamount: 0
  })
  let sendBack = {
    username: username,
    totalhashes: 0,
    totaltime: 0,
    totalamount: 0
  }
    res.send(sendBack)

  }
  
})
.get(function(req, res) {
  //render signup page
})



router.route('/login')
.post(function(req, res){ 

  db.Users.findAll().then(user => {
    if(user.username === req.body.username && user.password === req.body.password){
      res.send(user);
    }
    else{
      res.send(false)
    }
  })
  
  
})

.get(function(req, res) {
  //render login page
})

router.route('/update')
.post(function(req, res ){
  let usor = req.body.username;
  db.Users.update({
      totalhashes: req.body.totalhashes,
      totalamount: req.body.totalamount
    }, {
      where: {
        username: usor
      }
    }
  );
})

app.use('/main', router);
app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})

