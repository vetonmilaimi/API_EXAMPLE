const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/auth.middlewares')

const usersController = require('../controllers/users.controllers')
const { jsonResponse } = require('../lib/helpers')
const usersControllers = require('../controllers/users.controllers')

router.get('/', authMiddleware.verifyLogin, async (req, res) => {
  try {
    const result = await usersControllers.getUsers()
    res.json(jsonResponse(result))
  } catch (error) {
    res.status(400).json(jsonResponse(err.message, false))
  }
})

router.post('/change-password/:id', authMiddleware.verifyLogin, async (req, res) => {
  const { password } = req.body
  try {
    const result = await usersController.changePassword(password, req.params.id)
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(400).json(jsonResponse(err.message, false))
  }
})

router.post('/update/:id', authMiddleware.verifyLogin, async (req, res) => {
  try {
    const result = await usersController.updateUser(req.body, req.params.id)
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(400).json(jsonResponse(err.message, false))
  }
})

module.exports = router