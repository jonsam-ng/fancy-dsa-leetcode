var removeElement = function (nums, val) {
  const len = nums.length;
  if (!len) return 0;
  let slow = 0,
      fast = 0;

  while (fast < len) {
    if (nums[fast] !== val) nums[slow++] = nums[fast];
    fast++;
  }

  return slow;
};
