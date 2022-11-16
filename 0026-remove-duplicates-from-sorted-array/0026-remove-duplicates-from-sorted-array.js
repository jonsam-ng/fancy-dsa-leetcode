var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len === 0) return 0;
  let slow = 0,
      fast = 0;

  while (fast <= len - 1) {
    if (nums[fast] !== nums[slow]) nums[++slow] = nums[fast];
    fast++;
  }

  return slow + 1;
};
