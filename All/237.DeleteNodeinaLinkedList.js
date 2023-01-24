var deleteNode = function(node) {
    let temp = node.next;
    node.val = temp.val;
    node.next = temp.next;
    delete temp;
};