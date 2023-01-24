var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head,
    fast = head,
    entry = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }
  if (!fast.next || !fast.next.next) return null;
  while (entry !== slow) {
    entry = entry.next;
    slow = slow.next;
  }
  return slow;
};
