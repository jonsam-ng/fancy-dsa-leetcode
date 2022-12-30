/**
 * @param {number[]} nums
 * @return {number}
 * @desc by DP
 */
var maxSubArray = function (nums) {
  const len = nums.length;
  if (!len) return 0;
  let m0 = -Infinity,
    m1 = nums[0],
    r = m1;

  for (let i = 1; i < len; i++) {
    const n = nums[i];
    m0 = m1;
    m1 = Math.max(n, m0 + n);
    r = Math.max(r, m1);
  }

  return r;
};
