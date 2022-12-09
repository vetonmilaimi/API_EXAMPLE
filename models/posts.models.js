const Sequelize = require('sequelize')
const sequelize = require('../lib/dbConfig')

const Post = sequelize.define("post", {
  title: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT(),
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Post