/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//  Preorder (Root, Left, Right) 

let preorder = root => {
    let stack = [], result = [], node = root;
    while (node) {
        node.val && result.push(node.val);
        node.right && stack.push(node.right);
        node = node.left || stack.pop();
    }
    return result;
}


// Second
let preorder2 = root => {
    let stack = [], result = [], node = root;
    while (node || stack.length) {
        if (node) {
            result.push(node.val);
            stack.push(node.right);
            node = node.left;
        }
        else {
            node = stack.pop()
        }
    }
    return result;
}



// DFS
// process the current node and then push the children
var preorderTraversal = function (root) {
    if (!root) return [];
    let result = [];
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
};