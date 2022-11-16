var deleteDuplicates = function (head) {
  if (!head) return null;
  let slow = head,
      fast = head;

  while (fast) {
    if (fast.val !== slow.val) {
      slow.next = fast;
      slow = slow.next;
    }

    fast = fast.next;
  }

  slow.next = null;
  return head;
};
