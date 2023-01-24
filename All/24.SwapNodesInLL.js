// Given a linked list, swap every two adjacent nodes and return its head. 
// You must solve the problem without modifying the values in the list's nodes 
// (i.e., only nodes themselves may be changed.)

// Tags - #again, #linkedlist

var swapPairs = function (head) {
    if (!(head && head.next)) {
        return head;
    }
    let [a, b, c] = [head, head?.next, head?.next?.next];
    b.next = a;
    a.next = swapPairs(c);
    return b;
};