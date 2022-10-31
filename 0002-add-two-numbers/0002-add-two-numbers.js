/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let v1 = null,
    v2 = null,
    n = 0,
    v = 0;
  (head = new ListNode()), (current = head), l1, l2;
  while (l1 !== null || l2 !== null || n !== 0) {
    [v1, v2] = [l1, l2].map((p) => p?.val ?? 0);
    [l1, l2] = [l1, l2].map((p) => p?.next ?? null);
    [v, n] = [(v1 + v2 + n) % 10, ((v1 + v2 + n) / 10) | 0];
    current = current.next = new ListNode(v);
  }
  return head.next;
};
