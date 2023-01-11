/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length;
  digits[len - 1] += 1;
  digits.unshift(0);
  
  // Now the length is len + 1
  for (let i = len; i >= 1; i--) {
    if (digits[i] > 9) {
      digits[i - 1] += ~~(digits[i] / 10);
      digits[i] = digits[i] % 10;
    }
  }

  if (digits[0] === 0) digits.shift();

  return digits;
};
