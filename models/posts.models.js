const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  title: { type: String, required: true},
  body: { type: String, required: true}
}, {
  timestamps: true
})

const postsModel = mongoose.model('Posts', postsSchema)
module.exports = postsModel