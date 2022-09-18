const { ObjectID } = require('bson')
const usersModel = require('../models/users.models')

module.exports = {
  insert: async (values) => {
    const result = await usersModel.create(values)
    return result
  },
  findByEmail: async (email) => {
    const result = await usersModel.findOne({ email }).exec()
    return result
  },
  updatePassword: async (_id, password) => {
    const result = await usersModel.findByIdAndUpdate(_id, { password }).exec()
    return result
  },
  editById: async (_id, data) => {
    const result = await usersModel.findByIdAndUpdate( _id , data).exec()
    // console.log(result)
    return result
  }
}