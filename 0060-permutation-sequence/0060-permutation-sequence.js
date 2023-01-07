/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * @desc By BT
 */
var getPermutation = function(n, k) {
  const visited = new Array(n).fill(false);
  let count = 0, r = '', seq = '';
  
  const resolve = () => {
    if(seq.length === n) return ++count === k ? r = seq : false;
    
    for(let i = 0; i < n; i++) {
      if(visited[i]) continue;
      
      seq += i + 1;
      visited[i] = true;
      
      if(resolve(i + 1)) return true;
      
      seq = seq.slice(0 , -1);
      visited[i] = false;
    }
    
    return false;
  }
  return resolve(), r;
};