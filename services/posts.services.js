const postsModel = require('../models/posts.models')

module.exports = {
  insert: async (values) => {
    const result = await postsModel.create(values)
    return result
  }, 
  get: async () => {
    const result = await postsModel.find().limit(20)
    return result
  }
}