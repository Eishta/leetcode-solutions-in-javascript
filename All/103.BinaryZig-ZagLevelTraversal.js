/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//  Input: root = [3,9,20,null,null,15,7]
//  Output: [[3],[20,9],[15,7]]
//  Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Method 1 ------------------- 2 stacks
// https://www.youtube.com/watch?v=eDdPZ05y4Os
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    else {
        let stack = [root];
        let cs = [];
        let level = 0;
        let result = [];
        while (stack.length) {
            let l = stack.length;
            let r = [];
            for (let i = 0; i < l; i++) {
                let node = stack.pop();
                if (level % 2 !== 1) {
                    node.left && cs.push(node.left);
                    node.right && cs.push(node.right);

                } else {
                    node.right && cs.push(node.right);
                    node.left && cs.push(node.left);
                }
                r.push(node.val);
            }
            if (!stack.length) {
                stack = cs;
                cs = [];
            }
            level++;
            result.push(r);
        }
        return result;
    }
};



// Method 2 -------------- with queue
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/discuss/580306/Javascript-BFS
let zigzagLevelOrder = (root) => {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let deep = 0;

    while (queue.length) {
        let l = queue.length;
        let level = [];
        for (let i = 0; i < l; i++) {
            let node = queue.shift();
            if (deep % 2 === 0) level.push(node.val);
            else level.unshift(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        deep++;
        result.push(level);
    }
}