/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const root = new ListNode(null, null);
  let fast = head,
    slow = root;

  while (fast) {
    let hasDuplicate = false;
    while (fast.next && fast.next.val === fast.val) {
      hasDuplicate = true;
      fast = fast.next;
    }
    if (hasDuplicate) {
      fast = fast.next;
      continue;
    }
    
    if (fast.val !== slow.val) {
      slow.next = fast;
      slow = slow.next;
    }
    fast = fast.next;
  }

  slow.next = null;

  return root.next;
};
