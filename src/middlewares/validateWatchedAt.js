const { isValidDate } = require('../utils/validations');

function validateWatchedAt(req, _res, next) {
  const BAD_REQUEST = 400;
  const { watchedAt } = req.body.talk;
  if (!watchedAt) {
    return next({
      status: BAD_REQUEST, message: 'O campo "watchedAt" é obrigatório',
    });
  }

  if (!isValidDate(watchedAt)) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
}

module.exports = validateWatchedAt;
