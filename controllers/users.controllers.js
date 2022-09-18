const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');

const usersServices = require('../services/users.services')

module.exports = {
  add: async (params) => {
    const { firstName, lastName, email, age, password } = params;

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT))

    const result = await usersServices.insert({
      firstName,
      lastName,
      password: hashedPassword,
      age,
      email,
    })

    return {
      result
    }
  },
  changePassword: async (password, id) => {
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT))
    const result = await usersServices.updatePassword(id, hashedPassword)
    return result._id
  },
  updateUser: async (params, id) => {
    const { firstName, lastName, email, age, password } = params

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT))

    const updatedUser = {
      firstName,
      lastName,
      email,
      age,
      password: hashedPassword
    }

    const result = await usersServices.editById(id, updatedUser)
    return result._id
  }
}