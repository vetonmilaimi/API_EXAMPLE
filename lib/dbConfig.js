const Sequelize = require('sequelize')

const sequelize = new Sequelize("api_example", "root", "", {
  host: "localhost",
  dialect: "mysql"
})

module.exports = sequelize