// Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEnd = function (head, n) {
    if (!head || !n) return head;
    let [hare, curr] = [head, head];
    while (n) {
        hare = hare.next;
        n--;
    }
    while (hare && hare.next) {
        hare = hare.next;
        curr = curr.next; // curr will stop at one element before the element to be deleted
    }
    if (!hare) {  // hare is null when you have to delete the 1st element
        head = head.next;
    } else {
        curr.next = curr.next ? curr.next.next : null;
    }
    return head;
};