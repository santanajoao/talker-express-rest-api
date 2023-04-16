function validatePassword(req, _res, next) {
  const BAD_REQUEST = 400;
  const MIN_LENGHT = 6;
  const { password } = req.body;

  if (!password) {
    return next({
      status: BAD_REQUEST, message: 'O campo "password" é obrigatório',
    });
  }

  if (password.length < MIN_LENGHT) {
    return next({
      status: BAD_REQUEST,
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }

  next();
}

module.exports = validatePassword;
