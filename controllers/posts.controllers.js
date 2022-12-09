const postsModel = require('../models/posts.models')

module.exports = {
  add: async (params) => {
    const { title, body } = params
    const result = await postsModel.create({
      title, 
      body
    })
    return result
  },
  
  getAll: async () => {
    const result = await postsModel.findAll()
    return result
  }
}