function isInteger(number) {
  return parseInt(number, 10) === number;
}

function isInRange(number, min, max) {
  return number >= min && number <= max;
}

function isNotEmpty(value) {
  return value !== null && value !== undefined;
}

function validateRateQuerie(req, _res, next) {
  const MIN_RATE = 1;
  const MAX_RATE = 5;
  const BAD_REQUEST = 400;
  
  const { rate } = req.query;
  const numRate = Number(rate);
  const isValid = isInteger(numRate) && isInRange(numRate, MIN_RATE, MAX_RATE);
  if (isNotEmpty(rate) && !isValid) {
    return next({
      status: BAD_REQUEST,
      message: `O campo "rate" deve ser um número inteiro entre ${MIN_RATE} e ${MAX_RATE}`,
    });
  }

  next();
}

module.exports = validateRateQuerie;
