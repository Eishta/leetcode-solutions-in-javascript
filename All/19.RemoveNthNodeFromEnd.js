// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Tags - #again , #linkedlist
var removeNthFromEnd = function (head, n) {
    if (!head || !n) return head;
    let [hare, curr] = [head, head];
    while (n) {
        hare = hare.next;
        n--;
    }
    while (hare && hare.next) {
        hare = hare.next;  // hare will stop at the last element of the LL 
        curr = curr.next; // curr will stop at one element before the element to be deleted
    }
    if (!hare) {  // hare is null when you have to delete the 1st element, hare became null in 1st loop only
        head = head.next;
    } else {
        curr.next = curr.next ? curr.next.next : null;
    }
    return head;
};