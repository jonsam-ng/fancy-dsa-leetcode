/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length,
    dp = new Array(len).fill(1),
    path = [];
  let max = 1;
  for (let i = 0; i < len; i++) {
    let j = 0;
    for (; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // update path of LIS
    if (dp[i] > max) {
      if (max === 1) path.push(nums[j - 1]);
      path.push(nums[i]);
    }
    // now we know LIS of length i
    max = Math.max(max, dp[i]);
  }
  return max;
};
