// Method 1
// for each node of L1 compare each node of L2
//    if l1.node === l2.node retur node.value
//    else return null
// Complexity - O(m*n)

// Method 2
// for each node of L1, maintain a dictionary


// Method 3
// len1 = L1.length, len2= L2.length
// diff of len1 and len2
// skip diff number of nodes from lengthy list and start iterating both simultaneously
// while(head1 !== head2){
//     head1=head1.next;
//     head2=head2.next
// }
var getIntersectionNode = function (headA, headB) {
    let [l1, l2] = [0, 0];
    let [p1, p2] = [headA, headB];
    while (p1) {
        l1++;
        p1 = p1.next;
    }
    while (p2) {
        l2++;
        p2 = p2.next;
    }
    [p1, p2] = [headA, headB];
    let diff = Math.abs(l1 - l2);
    if (l1 > l2) {
        for (let i = 0; i < diff; i++) {
            p1 = p1.next;
        }
    }
    else {
        for (let i = 0; i < diff; i++) {
            p2 = p2.next;
        }
    }
    while (p1 != p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};
// Method4
// keep the pointers to both the head nodes and traverse till both nodes are equal
// if any of the pointer becomes null, pint it to the head of the other linked list