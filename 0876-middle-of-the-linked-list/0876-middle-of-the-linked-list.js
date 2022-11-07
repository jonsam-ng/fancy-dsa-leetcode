var middleNode = function (head) {
  if (!head) return null;
  let slow = fast = head;

  while (fast && fast.next) [slow, fast] = [slow.next, fast.next.next];

  return slow;
};
