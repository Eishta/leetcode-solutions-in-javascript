// Given head, the head of a linked list, determine if the linked list has a cycle in it.

var hasCycle = function (head) {
    let [slow, fast] = [head, head];
    while (slow != null && fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
};