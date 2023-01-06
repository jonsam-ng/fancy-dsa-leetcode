/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * By BS
 */
var myPow = function (x, n) {
  const hash = [],
    step = 2;
  let rst = 1,
    target = Math.abs(n);
  hash.push([1, x]);

  let count = step,
    prev = x;
  while (count < target) {
    const sum = prev * prev;
    hash.push([count, sum]);
    count *= step;
    prev = sum;
  }

  while (target > 0) {
    let idx = 0;
    for (let i = hash.length - 1; i >= 0; i--) {
      if (hash[i][0] < target) {
        idx = i;
        break;
      }
    }
    rst *= hash[idx][1];
    target -= hash[idx][0];
  }

  return n > 0 ? rst : 1 / rst;
};
