/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const pattern = /\s*([a-zA-Z]+)\s*$/
  return (s.match(pattern))[1].length;
};