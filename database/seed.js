const Sequelize = require('sequelize')
const data = require('./data.json')
const db = require('./db.js')
db.Users.destroy({
  where: {}
})


for (let i = 0; i < data.length; i++) {
  db.Users.create({
    username: data[i].username,
    password: data[i].password,
    email: data[i].email,
    total: data[i].total,
    totalhashes: data[i].totalhashes,
    totaltime: data[i].totaltime,
    totalamount: data[i].totalamount,
    org: data[i].org
  })
}

/*
    username: 'not logged',
    password: 'no pass',
    email: 'Sequelize.STRING',
    total: 0,
    totalhashes: 0,
    totaltime: 'in no time',
    totalamount: 0,
    org: 'my pocket'
*/