const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usersModel = require("../models/users.models")

module.exports = {
  login: async (params) => {
    const { email, password } = params

    const user = await usersModel.findOne({ where: { email } })
    if (!user) {
      throw new Error("User not exists")
    }


    if (await !bcrypt.compare(password, user.password)) {
      throw new Error("Password is incorrect")
    }

    return token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET)
  }
}