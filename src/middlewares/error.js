function errorHandler(err, _req, res, _next) {
  const { status, message } = err;

  console.error(message);

  res.status(status).json({ message });
}

module.exports = errorHandler;
