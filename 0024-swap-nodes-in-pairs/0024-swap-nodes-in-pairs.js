/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseGroup = function (head, tail) {};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let first = head,
    second = head.next,
    more = second.next;
  
  (second.next = first), (first.next = swapPairs(more));
  return second;
};
