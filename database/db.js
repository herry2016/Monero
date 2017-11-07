const Sequelize = require('sequelize')
const db = new Sequelize('database', null, null, {
    host: 'localhost',
    dialect: 'sqlite',
    // only if you  use sqlite
    storage: '../database/storage.sqlite'
})

const Users = db.define('users',{
    username: Sequelize.STRING,
    total: Sequelize.STRING
})

// db.create({
//     username: 'test',
//     total: '12345'
// })

Users.sync();
exports.Users = Users;