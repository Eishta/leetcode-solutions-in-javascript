// Given the head of a sorted linked list,
//  delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function (head) {
    if (!head) return head
    let prev = head;
    let cur = head.next;
    while (cur) {
        if (cur.val != prev.val) {
            prev.next = cur;
            prev = cur;
        }
        cur = cur.next;
    }
    prev.next = null;
    return head;
};