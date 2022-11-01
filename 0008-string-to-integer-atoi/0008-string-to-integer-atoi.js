var myAtoi = function (s) {
  const max = Math.pow(2, 31);
  let n = parseInt(s.trim());
  if (isNaN(n)) n = 0;
  if (n < -max) return -max;
  if (n > max - 1) return max - 1;
  return n;
};
