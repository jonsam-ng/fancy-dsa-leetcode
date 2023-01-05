var binarySearch = function (nums, target, leftBound = true) {
  const len = nums.length;
  let left = 0,
    right = len - 1;

  while (left <= right) {
    const mid = left + ~~((right - left) / 2);
    
    if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
    else leftBound ? (right = mid - 1) : (left = mid + 1);
  }

  const idx = leftBound ? left : left - 1;
  return nums[idx] === target ? idx : -1;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [binarySearch(nums, target, true), binarySearch(nums, target, false)];
};
