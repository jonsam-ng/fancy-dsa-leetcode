/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const len = nums.length,
    swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  for (let i = 0; i < len; i++) {
    // Placement, 1~len will be in-place
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i])
      swap(nums[i] - 1, i);
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return len + 1;
};
