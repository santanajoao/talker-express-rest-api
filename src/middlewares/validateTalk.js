const BAD_REQUEST = 400;

function validateTalk(req, _res, next) {
  const { talk } = req.body;

  if (!talk) {
    return next({
      status: BAD_REQUEST, message: 'O campo "talk" é obrigatório',
    });
  }

  next();
}

module.exports = validateTalk;