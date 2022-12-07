/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0,
    left = 0,
    right = 0,
    rst = -Infinity;
  
  while (right < nums.length) {
    const num = nums[right];
    
    right++;
    sum += num;
    // make sure temp sum is always larger than num
    while (sum < num) {
      sum -= nums[left];
      left++;
    }
    if (sum > rst) rst = sum;
  }
  return rst;
};
