const UNAUTHORIZED = 401;

function validateAuth(req, _res, next) {
  const TOKEN_LENGTH = 16;
  const token = req.get('authorization');

  if (!token) {
    return next({ status: UNAUTHORIZED, message: 'Token não encontrado' });
  }

  if (token.length !== TOKEN_LENGTH) {
    return next({ status: UNAUTHORIZED, message: 'Token inválido' });
  }

  next();
}

module.exports = validateAuth;
