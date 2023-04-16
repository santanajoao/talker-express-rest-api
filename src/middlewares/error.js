function errorHandler(err, _req, res, _next) {
  const BAD_REQUEST = 500;
  const { status = BAD_REQUEST, message } = err;

  console.error(message);

  res.status(status).json({ message });
}

module.exports = errorHandler;
