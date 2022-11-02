var maxArea = function (height) {
  if (!height || height.length < 2) return 0;
  let i = 0,
      j = height.length - 1,
      max = 0;

  while (i < j) {
    const cur = (j - i) * Math.min(height[i], height[j]);
    if (cur > max) max = cur;
    if (height[i] <= height[j]) i++;else j--;
  }

  return max;
};
