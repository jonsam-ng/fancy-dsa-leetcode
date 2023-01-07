/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const len = intervals.length,
    [tLeft, tRight] = newInterval;
  let left = 0,
    right = len - 1,
    rst = [];

  while (left <= right) {
    const mid = left + ~~((right - left) / 2);
    const [mLeft, mRight] = intervals[mid];

    if (mRight < tLeft) left = mid + 1;
    else if (mLeft > tRight) right = mid - 1;
    else {
      let i = mid,
        j = mid;
      while (i >= 0 && intervals[i][1] >= tLeft) i--;
      while (j < len && intervals[j][0] <= tRight) j++;

      rst = intervals.slice(0, Math.max(0, i + 1));
      rst.push([
        Math.min(intervals[i + 1][0], tLeft),
        Math.max(intervals[j - 1][1], tRight),
      ]);
      return rst.concat(intervals.slice(j));
    }
  }
  if (left <= 0) rst = [newInterval, ...intervals];
  else if (left >= len) rst = [...intervals, newInterval];
  else {
    rst = intervals;
    rst.splice(left, 0, newInterval);
  }
  return rst;
};
