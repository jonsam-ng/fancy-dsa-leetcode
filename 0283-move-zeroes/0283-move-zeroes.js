var moveZeroes = function (nums) {
  const len = nums.length;
  let slow = 0,
    fast = 0;
  while (fast < len) {
    if (nums[fast]) nums[slow++] = nums[fast];
    fast++;
  }
  while (slow < len) nums[slow++] = 0;
  return nums;
};
