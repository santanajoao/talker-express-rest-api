function isInteger(number) {
  return parseInt(number, 10) === number;
}

function isInRange(number, min, max) {
  return number >= min && number <= max;
}

module.exports = { isInteger, isInRange };
