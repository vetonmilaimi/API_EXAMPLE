const postsServices = require('../services/posts.services')

module.exports = {
  add: async (params) => {
    const { title, body } = params
    const result = await postsServices.insert({
      title, 
      body
    })
    return result
  },
  getAll: async () => {
    const result = await postsServices.get()
    return result
  }
}