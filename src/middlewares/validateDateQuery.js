const { isValidDate, isEmpty } = require('../utils/validations');

function validateDateQuery(req, _res, next) {
  const BAD_REQUEST = 400;
  const { date } = req.query;
  
  const notEmpty = !isEmpty(date) && date !== '';
  if (notEmpty && !isValidDate(date)) {
    return next({
      status: BAD_REQUEST,
      message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
}

module.exports = validateDateQuery;
