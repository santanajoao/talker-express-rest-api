function validateAge(req, _res, next) {
  const BAD_REQUEST = 400;
  const MIN_AGE = 18;
  const { age } = req.body;
  if (!age) {
    return next({
      status: BAD_REQUEST, message: 'O campo "age" é obrigatório',
    });
  }

  const isInteger = parseInt(age, 10) === age;
  if (typeof age !== 'number' || age < MIN_AGE || !isInteger) {
    return next({
      status: BAD_REQUEST,
      message: `O campo "age" deve ser um número inteiro igual ou maior que ${MIN_AGE}`,
    });
  }

  next();
}

module.exports = validateAge;
