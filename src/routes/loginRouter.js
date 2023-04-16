const express = require('express');
const { generateToken } = require('../utils/login');

const router = express.Router();

const OK = 200;

router.post('/', async (_req, res) => {
  const token = generateToken();
  res.status(OK).json({ token });
});

module.exports = router;
