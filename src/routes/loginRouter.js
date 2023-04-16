const express = require('express');
const { generateToken } = require('../utils/login');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const router = express.Router();

const OK = 200;

router.post('/', validateEmail, validatePassword, async (_req, res) => {
  const token = generateToken();
  res.status(OK).json({ token });
});

module.exports = router;
