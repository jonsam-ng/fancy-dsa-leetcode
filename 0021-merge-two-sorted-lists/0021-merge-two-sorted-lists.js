class ListNode {
  constructor(val = undefined, next = null) {
    this.val = val;
    this.next = next;
  }

}

var mergeTwoLists = function (list1, list2) {
  const head = new ListNode(-1, null);
  let p = head,
      p1 = list1,
      p2 = list2;

  while (p1 && p2) {
    let node;

    if (p1.val > p2.val) {
      node = p2;
      p2 = p2.next;
    } else {
      node = p1;
      p1 = p1.next;
    }

    p.next = new ListNode(node.val, null);
    p = p.next;
  }

  let pl = p1 || p2;

  while (pl) {
    p.next = new ListNode(pl.val, null);
    [pl, p] = [pl.next, p.next];
  }

  return head.next;
};
