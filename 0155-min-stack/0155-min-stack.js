var MinStack = function () {
  this._stack = [];
  this._min = Infinity;
  this._top = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this._stack.push({ val, localMin: this._min, localTop: this._top });
  this._top = val;
  this._min = Math.min(val, this._min);

  return this;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const current = this._stack.pop();
  if (current === undefined) return current;
  const { val, localMin, localTop } = current;
  this._min = localMin;
  this._top = localTop;
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this._top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this._min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
