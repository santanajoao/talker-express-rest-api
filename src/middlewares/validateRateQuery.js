function validateRateQuerie(req, _res, next) {
  const MIN_RATE = 1;
  const MAX_RATE = 5;
  const BAD_REQUEST = 400;

  const rate = Number(req.query.rate);
  if (rate < MIN_RATE || rate > MAX_RATE) {
    return next({
      status: BAD_REQUEST,
      message: `O campo "rate" deve ser um número inteiro entre ${MIN_RATE} e ${MAX_RATE}`,
    });
  }

  next();
}

module.exports = validateRateQuerie;
