function validateName(req, res, next) {
  const MINIMUM_LENGTH = 3;
  const BAD_REQUEST = 400;

  const { name } = req.body;
  if (!name) {
    return next({
      status: BAD_REQUEST, message: 'O campo "name" é obrigatório',
    });
  }

  if (name.length < MINIMUM_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: `O "name" deve ter pelo menos ${MINIMUM_LENGTH} caracteres`,
    });
  }

  next();
}

module.exports = validateName;
