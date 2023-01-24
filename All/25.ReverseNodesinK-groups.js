/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  Input: head = [1,2,3,4,5], k = 2
//  Output: [2,1,4,3,5]

// Tags - #again, #linkedlist

var reverseKGroup = function (head, k) {
  head = reverse(head, k); // head will be replaced with the last element of 1st group, here it is 2
  return head;
};

function reverse(node, k) {
  if (node === null) return node;
  let prev = null,
    cur = node,
    start = node,
    end = node;
  // check if reverse is possible and move end to the next list 1st node
  for (let i = 0; i < k; i++) {
    if (end == null) return node; // if the current group has less than k elements-> return the same list without reverse
    end = end.next; // end will have the 1st element of next group
  }
  // reverse the links
  while (cur !== end) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // now the start node is the last node of current group after reversal -> it will be attched to the first node of next group reversed
  start.next = reverse(cur, k);
  return prev; // the first node of the current reversed group
}

// TC = O(N)

// --------------------------------------------------------------------------------------------------------

var reverseKGroup = function (head, k) {
  let preHead = new ListNode(0, head);
  let tail = preHead;
  let start, end;
  let next = head;

  while (next !== null) {
    (start = next), (end = next);
    for (let i = 1; i < k; i++) {
      if (end == null) break;
      end = end?.next;
    }
    if (end == null) {
      tail.next = start;
      return preHead?.next;
    }
    next = end?.next;
    reverse(start, end);
    tail.next = end;
    tail = start;
  }
  return preHead.next;
};
var reverse = function (start, end) {
  let prev,
    stop = end?.next,
    cur = start;
  while (cur !== stop) {
    let next = cur?.next;
    cur.next = prev || null;
    prev = cur;
    cur = next;
  }
};
