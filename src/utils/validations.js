function isInRange(number, min, max) {
  return number >= min && number <= max;
}

function isEmpty(value) {
  return value === null || value === undefined;
}

function isValidDate(date) {
  const DATE_REGEX = /([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}/;
  return DATE_REGEX.test(date);
}

module.exports = { isInRange, isEmpty, isValidDate };
