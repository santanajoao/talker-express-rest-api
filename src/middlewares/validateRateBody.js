const { isInteger, isInRange } = require('../utils/numbers');
const { isEmpty } = require('../utils/values');

function validateRate(req, _res, next) {
  const BAD_REQUEST = 400;
  const MIN_RATE = 1;
  const MAX_RATE = 5;
  const { rate } = req.body.talk || req.body;
  if (isEmpty(rate)) {
    return next({
      status: BAD_REQUEST, message: 'O campo "rate" é obrigatório',
    });
  }

  if (!isInRange(rate, MIN_RATE, MAX_RATE) || !isInteger(rate)) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }

  next();
}

module.exports = validateRate;
