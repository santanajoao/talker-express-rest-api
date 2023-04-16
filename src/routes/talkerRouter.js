const express = require('express');
const {
  getTalkers,
  getTalkerById,
  addTalker,
  updateTalker,
  deleteTalker,
  searchTalkers,
} = require('../utils/talker');
const validateAuth = require('../middlewares/validateAuth');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRateBody = require('../middlewares/validateRateBody');
const validateRateQuerie = require('../middlewares/validateRateQuery');

const router = express.Router();

const OK = 200;
const CREATED = 201;
const NO_CONTENT = 204;
const NOT_FOUND = 404;

router.get('/', async (_req, res) => {
  const talkers = await getTalkers();
  res.status(OK).json(talkers);
});

router.get('/search', validateAuth, validateRateQuerie, async (req, res) => {
  const { q, rate } = req.query;
  const result = await searchTalkers(q, Number(rate));
  res.status(OK).json(result);
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

router.post(
  '/',
  validateAuth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRateBody,
  async (req, res) => {
    const talker = req.body;
    const inserted = await addTalker(talker);
    res.status(CREATED).json(inserted);
  },
);

router.put(
  '/:id',
  validateAuth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRateBody,
  async (req, res) => {
    const id = Number(req.params.id);
    const talker = req.body;
    const updated = await updateTalker(id, talker);
    if (updated) {
      res.status(OK).json(updated);
    } else {
      res.status(NOT_FOUND).json({
        message: 'Pessoa palestrante não encontrada',
      });
    }
  },
);

router.delete('/:id', validateAuth, async (req, res) => {
  const id = Number(req.params.id);
  await deleteTalker(id);
  res.status(NO_CONTENT).end();
});

module.exports = router;
