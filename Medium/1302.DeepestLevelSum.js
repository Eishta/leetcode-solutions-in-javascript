//Given the root of a binary tree, return the sum of values of its deepest leaves.

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19

// Approach:- Check the last level using BFS and keep a variable storing the sum of last processed level

var deepestLeavesSum = function (root) {
    if (!root) return 0;
    let que = [];
    que.push(root);
    let sum = 0;
    while (que.length) {
        let len = que.length;
        sum = 0;
        for (let i = 0; i < len; i++) {
            let node = que.shift();
            sum += node.val;
            if (node.left) {
                que.push(node.left);
            }
            if (node.right) {
                que.push(node.right);
            }
        }
    }
    return sum;
};


// Approach using stack 

var deepestLeavesSumWithStack = function (root) {
    if (!root) return 0;
    let stack = [];
    let depth = 0;
    let sum = 0;
    stack.push([root, 0]);
    while (stack.length) {
        let [node, level] = stack.pop();
        if (node.left === null && node.right === null) {
            if (depth == level) {
                sum += node.val;
            }
            else if (depth < level) {
                sum = 0;
                sum += node.val
                depth = level;
            }
        }
        else {
            node.right && stack.push([node.right, level + 1])
            node.left && stack.push([node.left, level + 1])
        }

    }
    return sum;
};