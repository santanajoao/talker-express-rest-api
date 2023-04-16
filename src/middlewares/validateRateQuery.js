const { isInteger, isInRange, isEmpty } = require('../utils/validations');

function validateRateQuerie(req, _res, next) {
  const MIN_RATE = 1;
  const MAX_RATE = 5;
  const BAD_REQUEST = 400;
  
  const { rate } = req.query;
  const numRate = Number(rate);
  const isValid = isInteger(numRate) && isInRange(numRate, MIN_RATE, MAX_RATE);
  if (!isEmpty(rate) && !isValid) {
    return next({
      status: BAD_REQUEST,
      message: `O campo "rate" deve ser um número inteiro entre ${MIN_RATE} e ${MAX_RATE}`,
    });
  }

  next();
}

module.exports = validateRateQuerie;
