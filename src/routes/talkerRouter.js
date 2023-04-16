const express = require('express');
const { getTalkers } = require('../utils/talker');

const router = express.Router();

const OK = 200;

router.get('/', async (_req, res) => {
  const talkers = await getTalkers();
  res.status(OK).json(talkers);
});

module.exports = router;
