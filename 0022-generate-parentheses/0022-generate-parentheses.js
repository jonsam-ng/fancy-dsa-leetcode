/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const lp = "(",
    rp = ")",
    output = [];
  let leftSum = 0,
    rightSum = 0,
    current = "";

  const resolve = () => {
    // update output
    if (current.length === 2 * n) return output.push(current);

    // make selections
    if (leftSum < n) {
      current += lp;
      leftSum += 1;
      resolve();
      current = current.slice(0, -1);
      leftSum -= 1;
    }

    if (rightSum < leftSum) {
      current += rp;
      rightSum += 1;
      resolve();
      current = current.slice(0, -1);
      rightSum -= 1;
    }
  };

  resolve();
  return output;
};
