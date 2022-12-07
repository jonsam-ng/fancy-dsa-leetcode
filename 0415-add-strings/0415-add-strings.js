/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let sum = "",
    i = num1.length - 1,
    j = num2.length - 1;
  overflow = 0;
  const getNum = (i, nums) => (nums[i] !== undefined ? +nums[i] : null);
  // add pieces to sum
  while (i >= 0 || j >= 0) {
    const n1 = getNum(i, num1),
      n2 = getNum(j, num2);
    const cur = [n1, n2, overflow]
      .filter((n) => n !== null)
      .reduce((sum, n) => (sum += n), 0);
    sum = cur % 10 + sum;
    overflow = ~~(cur / 10);
    i--, j--;
  }
  return overflow ? overflow + sum : sum;
};
