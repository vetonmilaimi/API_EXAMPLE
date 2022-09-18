const express = require('express')
const router = express.Router()

const { jsonResponse } = require('../lib/helpers');

const authMiddleware = require('../middlewares/auth.middlewares')
const postsController = require('../controllers/posts.controllers');

router.get('/', async (req, res) => {
  try {
    const result = await postsController.getAll()
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(400).json(jsonResponse(err.message, false))
  }
})

router.post('/add', authMiddleware.verifyLogin, async (req, res) => {
  try {
    const result = await postsController.add(req.body)
    res.json(jsonResponse(result));
  } catch (err) {
    res.json(jsonResponse(err.message), false);
  }
})

module.exports = router