const express = require('express');
const { getTalkers, getTalkerById } = require('../utils/talker');
const validateAuth = require('../middlewares/validateAuth');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');

const router = express.Router();

const OK = 200;
const NOT_FOUND = 404;

router.get('/', async (_req, res) => {
  const talkers = await getTalkers();
  res.status(OK).json(talkers);
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const talker = await getTalkerById(id);
  if (talker) {
    res.status(OK).json(talker);
  } else {
    res.status(NOT_FOUND).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
});

router.post('/', validateAuth, validateName, validateAge, async (req, res) => {
  res.status(201).end();
});

module.exports = router;
