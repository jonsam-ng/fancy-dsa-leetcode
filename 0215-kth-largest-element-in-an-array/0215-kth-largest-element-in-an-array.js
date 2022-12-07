/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const len = nums.length,
    target = len - k;
  if (k > len) return false;
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);
  const randomPartition = (low, high) => {
    // select random pivot
    const ran = ~~(Math.random() * (high - low + 1) + low);
    swap(ran, high);
    const pivot = nums[high];
    let p = low;

    for (let i = low; i <= high - 1; i++) {
      if (nums[i] < pivot) {
        swap(i, p);
        p++;
      }
    }
    
    swap(high, p);
    return p;
  };
  const quickSelect = (low, high, k) => {
    if (low === high && low === k) return nums[low];
    if (low >= high) return;
    const idx = randomPartition(low, high);
    
    if (idx === k) return nums[idx];
    return idx > k ? quickSelect(low, idx - 1, k) : quickSelect(idx + 1, high, k);
  };

  return quickSelect(0, len - 1, target);
};
