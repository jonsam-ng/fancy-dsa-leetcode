/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const len = intervals.length,
    rst = [];
  let prev = null;

  for (let i = 0; i < len; i++) {
    const interval = intervals[i];

    if (!prev) prev = interval;
    else if (prev[1] < interval[0]) {
      rst.push(prev);
      prev = interval;
    } else {
      prev = [Math.min(prev[0], interval[0]), Math.max(prev[1], interval[1])];
    }
  }
  
  if(prev) rst.push(prev);
  
  return rst;
};
