const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controllers')
const authController = require('../controllers/auth.controllers');
const { jsonResponse } = require('../lib/helpers');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', async (req, res) => {
  try {
    const result = await usersController.add(req.body)
    return res.json(jsonResponse(result))
  } catch (err) {
    return res.status(400).json(jsonResponse(err.message, false))
  }
})

router.post('/login', async (req, res) => {
  try {
    const result = await authController.login(req.body)
    return res.json(result)
  } catch (err) {
    return res.status(400).json(jsonResponse(err.message, false))
  }
})

module.exports = router;
