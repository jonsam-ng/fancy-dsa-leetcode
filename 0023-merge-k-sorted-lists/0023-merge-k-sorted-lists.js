class ListNode {
  constructor(val = undefined, next = null) {
    this.val = val;
    this.next = next;
  }

}

class MinQueue {
  constructor() {
    this._queue = [];

    this._compare = (a, b) => a.val > b.val;
  }

  _swap(i, j) {
    return [this._queue[i], this._queue[j]] = [this._queue[j], this._queue[i]];
  }

  _shouldSwap(i, j) {
    if ([i, j].some(i => i < 0 || i >= this.size())) return false;
    return this._compare(this._queue[i], this._queue[j]);
  }

  _getChild(i) {
    if (i < 0 || i >= this.size()) return -1;
    const [l, r] = [2 * i + 1, 2 * i + 2];
    const [lNode, rNode] = [this._queue[l], this._queue[r]];
    if (!lNode && !rNode) return -1;
    if (!lNode) return r;
    if (!rNode) return l;
    return this._compare(lNode, rNode) ? r : l;
  }

  _getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  _heapifyDown(i) {
    let p = i,
        c = this._getChild(i);

    while (this._shouldSwap(p, c)) {
      this._swap(p, c);

      [p, c] = [c, this._getChild(c)];
    }
  }

  _heapifyUp(i) {
    let c = i,
        p = this._getParent(i);

    while (this._shouldSwap(p, c)) {
      this._swap(p, c);

      [c, p] = [p, this._getParent(p)];
    }
  }

  size() {
    return this._queue.length;
  }

  enqueue(v) {
    this._queue.push(v);

    this._heapifyUp(this.size() - 1);

    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this._queue.pop();
    const root = this._queue[0];
    this._queue[0] = this._queue.pop();

    this._heapifyDown(0);

    return root;
  }

  isEmpty() {
    return this.size() <= 0;
  }

}

var mergeKLists = function (lists) {
  const q = new MinQueue(),
        head = new ListNode(-1, null);
  let p = head;
  lists.forEach(head => head && q.enqueue(head));

  while (!q.isEmpty()) {
    const node = q.dequeue();
    p = p.next = new ListNode(node.val, null);
    if (node.next) q.enqueue(node.next);
  }

  return head.next;
};
