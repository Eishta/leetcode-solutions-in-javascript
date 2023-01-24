// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values.
// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]

/**
 *              3
 *          9         20
 *        n    n     15  7
 */


var levelOrderBottom = function (root) {
    if (!root) return [];
    else {
        let queue = [root];
        let res = [];
        while (queue.length) {
            let l = queue.length;
            let level = [];
            for (let i = 0; i < l; i++) {
                let node = queue.shift();
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
                level.push(node.val);
            }
            res.unshift(level);  // the only differnce where we dont push but unshift the levels
        }
        return res;
    }
};