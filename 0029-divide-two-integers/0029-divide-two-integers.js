/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const n = eval(`${dividend}/${divisor}`);
  return n < 0
    ? Math.max(-Math.pow(2, 31), Math.ceil(n))
    : Math.min(Math.pow(2, 31) - 1, Math.floor(n));
};
