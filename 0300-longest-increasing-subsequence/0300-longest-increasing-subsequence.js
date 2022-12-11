/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length,
    dp = new Array(len).fill(1);
  let max = 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // now we know LIS of length i
    max = Math.max(max, dp[i]);
  }
  return max;
};
