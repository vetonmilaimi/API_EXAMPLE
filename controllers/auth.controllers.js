const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usersServices = require('../services/users.services')

module.exports = {
  login: async (params) => {
    const {email, password} = params

    const user = await usersServices.findByEmail(email)
    if(!user) {
      throw Error("User not exists")
    }

    if(!(await bcrypt.compare(password, user.password))) {
      throw Error("Invalid password")
    }

    const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET)
    
    return {
      token
    }
  }
}