const Sequelize = require("sequelize")
const sequelize = require('../lib/dbConfig')

const User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING(32),
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING(32),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(32),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(32),
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER(),
    allowNull: false
  },
});

module.exports = User