var twoSum = function (numbers, target) {
  const len = numbers.length;
  if (len < 2) return [];
  let l = 0,
      r = len - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    sum < target ? l++ : r--;
  }

  return [];
};
