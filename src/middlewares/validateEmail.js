function validateEmail(req, _res, next) {
  const BAD_REQUEST = 400;
  const { email } = req.body;
  if (!email) {
    next({ status: BAD_REQUEST, message: 'O campo "email" é obrigatório' });
  }
  
  const emailRegex = /.+@.+\.com/;
  const validEmail = emailRegex.test(email);
  if (!validEmail) {
    next({
      status: BAD_REQUEST,
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  next();
}

module.exports = validateEmail;
