let successor = null;

function reverseN(head, n) {
  if (n === 1) {
    successor = head.next;
    return head;
  }

  const last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = successor;
  return last;
}

var reverseBetween = function (head, left, right) {
  if (left === 1) return reverseN(head, right);
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
};
