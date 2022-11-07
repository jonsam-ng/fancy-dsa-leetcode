function findNthNodeFromEnd(head, n) {
  let p1 = p2 = head;

  for (let i = 0; i < n; i++) {
    p2 = p2.next;
    if (!p2) return i + 1 === n ? {
      node: p1,
      diff: 0
    } : {
      node: null,
      diff: n - i - 1
    };
  }

  while (p2) [p1, p2] = [p1.next, p2.next];

  return {
    node: p1,
    diff: 0
  };
}

var removeNthFromEnd = function (head, n) {
  const {
    node: prev,
    diff
  } = findNthNodeFromEnd(head, n + 1);
  let newHead = head;

  if (!prev) {
    if (diff === 1) {
      newHead = head.next;
      head.next = null;
    }
  } else {
    cur = prev.next;
    prev.next = cur.next;
    cur.next = null;
  }

  return newHead;
};
