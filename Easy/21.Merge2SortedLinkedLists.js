var mergeTwoLists = function (l1, l2) {
    let List = new ListNode(0); // link to the first node is saved
    let head = List;  // take a pointer to traverse the new linked list
    while (l1 && l2) { // loop while there are elemnts in both the linked lists
        // put the smaller value in the new linkedlist and increse the pointer of the l1 or l2 depending on which is smaller
        if (l1.val < l2.val) {
            head.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        else if (l2.val < l1.val) {
            head.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        // if both are equal put both in the new linked list one by one and icncraese there pointers.
        else {
            head.next = new ListNode(l1.val);
            head = head.next;
            head.next = new ListNode(l1.val);
            l1 = l1.next;
            l2 = l2.next;
        }
        head = head.next;
    }
    while (l1) {
        head.next = new ListNode(l1.val);
        l1 = l1.next;
        head = head.next;
    }
    while (l2) {
        head.next = new ListNode(l2.val);
        l2 = l2.next;
        head = head.next;
    }
    return List.next;
};