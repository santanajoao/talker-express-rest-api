function errorHandler(err, req, res, next) {
  const { status, message } = err;

  console.error(message);

  res.status(status).json({ message });
}

module.exports = errorHandler;
