var reorderList = function (head) {
  if (!head) return;
  // 1. find the mid of the list
  let slow = head,
    fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // now slow is the middle node of the list

  // 2. now reverse the list form slow.next till end
  let prev = null,
    cur = slow.next;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // now the second of the LL is reversed but connected by slow and slow.next
  // slow is the tail of left LL, slow.next is the tail of right LL
  // head is the start of left LL, prev is the start of the right LL

  // 3.  merge the two lists now
  let left = head,
    right = prev;

  while (left !== slow) {
    let nextL = left.next;
    let nextR = right.next;
    left.next = right;
    right.next = nextL;
    left = nextL;
    right = nextR;
  }

  // if odd length LL, remove the connection of slow and slow.next
  if (!right) {
    // if right is null whereas left is pointing to slow
    slow.next = null;
  }
};
