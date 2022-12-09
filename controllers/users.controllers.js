const bcrypt = require('bcrypt');

const usersModel = require('../models/users.models')

module.exports = {
  add: async (params) => {
    const { firstName, lastName, email, age, password } = params;

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT))

    const result = await usersModel.create({
      firstName,
      lastName,
      password: hashedPassword,
      age,
      email,
    })

    return result
  },

  getUsers: async () => {
    const result = await usersModel.findAll()
    return result
  }
}