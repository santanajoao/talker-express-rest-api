function validateWatchedAt(req, res, next) {
  const BAD_REQUEST = 400;
  const DATE_REGEX = /([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}/;
  const { watchedAt } = req.body.talk;
  if (!watchedAt) {
    return next({
      status: BAD_REQUEST, message: 'O campo "watchedAt" é obrigatório',
    });
  }

  const valid = DATE_REGEX.test(watchedAt);
  if (!valid) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
}

module.exports = validateWatchedAt;
