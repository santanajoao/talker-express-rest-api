function validateRateQuerie(req, _res, next) {
  const MIN_RATE = 1;
  const MAX_RATE = 5;
  const BAD_REQUEST = 400;

  const rate = Number(req.query.rate);
  const isNaN = Number.isNaN(rate);
  const notInteger = parseInt(rate, 10) !== rate;
  const outOfInterval = rate < MIN_RATE || rate > MAX_RATE;
  if (outOfInterval || isNaN || notInteger) {
    return next({
      status: BAD_REQUEST,
      message: `O campo "rate" deve ser um número inteiro entre ${MIN_RATE} e ${MAX_RATE}`,
    });
  }

  next();
}

module.exports = validateRateQuerie;
