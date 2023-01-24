// Method 1-- works for both perfect binary and imperfect one 

var connect = function (root) {
    if (!root) return root;
    let queue = [root];
    while (queue.length) {
        let l = queue.length;
        for (let i = 0; i < l; i++) {
            let node = queue.shift(); // get the first node

            // push its children to queue
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);

            // update its next if its not the last element of the curren level
            if (i != l - 1) {
                node.next = queue[0];
            }

        }
    }
    return root;
};



// method 2 - Iterative 
// not working
var connect = function (root) {
    if (!root) return root;
    let pre = root;

    while (root) {
        let cur = new Node(0);
        let temp = cur;
        while (root) { // traverse till last node of the current level
            if (root.left) {
                cur.next = root.left;
                cur = cur.next;
            }
            if (root.right) {
                cur.next = root.right;
                cur = cur.next;
            }
            root = root.next;
        }
        root = temp.next;
    }
    return pre;
};