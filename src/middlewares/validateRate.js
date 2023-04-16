function validateRate(req, res, next) {
  const BAD_REQUEST = 400;
  const MIN_RATE = 1;
  const MAX_RATE = 5;
  const { rate } = req.body.talk;
  if (rate === undefined || rate === null) {
    return next({
      status: BAD_REQUEST, message: 'O campo "rate" é obrigatório',
    });
  }

  const isInteger = parseInt(rate, 10) === rate;
  if (rate < MIN_RATE || rate > MAX_RATE || !isInteger) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }
  next();
}

module.exports = validateRate;
