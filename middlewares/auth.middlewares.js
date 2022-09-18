const jwt = require('jsonwebtoken')
const { jsonResponse } = require('../lib/helpers')

module.exports = {
  verifyLogin: (req, res, next) => {
        if (!req.headers.authorization) {
      res.json(jsonResponse("Token is not present", false))
    }

    if(!req.headers.authorization.startsWith("Bearer ")) {
      res.json(jsonResponse("Token is not a Bearer token", false))
    }

    const token = req.headers.authorization.split(" ")[1]
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.decoded = decoded._id

      next()
    } catch (err) {
      res.json(jsonResponse(err.message, false))
    }
  }
}