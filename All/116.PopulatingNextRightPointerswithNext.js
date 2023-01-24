// Method 1- Extra space 

// Time Complexity = nlogn
// Space complexity = O(n)

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


// Method 2 --- Recursion - preorder traversal
// Time complexity: O(n)
// Space complexity: O(1)
var connect = function (root) {
    if (!root || !root.left) { // sanity check - dont traverse for last level
        return;
    }
    // root.next = null , root.right.next = null, root.right.right.next = null ......
    // every node with its next = null , its right will also have next = null
    // i.e, if root.next === null, root.right.next = null
    root.left.next = root.right;                         // connect left -> right
    root.right.next = root.next ? root.next.left : null; // connect right -> next's left

    connect(root.left);
    connect(root.right);
};


// Method 3 --- Iterative

var connect = function (root) {
    if (!root || !root.left) return root;                   // sanity check
    let rootRef = root;                                     // save the reference to root
    while (root && root.left) {                             // exclude the last level's left and right check
        let temp = root;                                    // start from the left most node of the cur level
        while (temp) {                                      // till we reach the right most node
            temp.left.next = temp.right;                    // update the left node's next with the right node ref
            // root.next = null , root.right.next = null, root.right.right.next = null ......
            // every node with its next = null , its right will also have next = null
            // i.e, if root.next === null, root.right.next = null
            temp.right.next = temp.next ? temp.next.left : null;
            temp = temp.next;                                // navigate through the level using the next pointer of the current node already set in previous loop
        }
        root = root.left;                                    // update the level to the next level
    }
    return rootRef;                                          // return the ref of the root stored in the start
};