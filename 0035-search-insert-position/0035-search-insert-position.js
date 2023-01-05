/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length;
  let left = 0,
    right = len - 1;
  
  while (left <= right) {
    const mid = left + ~~((right - left) / 2);

    if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
    else return mid;
  }

  return left;
};
