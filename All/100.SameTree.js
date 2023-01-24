// Method 1 - Recursive
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else return false;
};
// Time complexity: O(n)
// Space complexity: O(1) (ignore recursion stack, otherwise the height of the tree)
///======================================= Method 2
// find the preorder of both and compare


// Method 2- With stack and iterative
// TimeComplexity = O(n)
// Space = O(n);
var isSameTree = function (p, q) {
    let stack = [p, q];
    while (stack.length) {
        q = stack.pop();
        p = stack.pop();

        if (!p && !q) continue;
        if (!p || !q) return false;
        if (p.val === q.val) {
            stack.push(p.left);
            stack.push(q.left);
            stack.push(p.right);
            stack.push(q.right);

        } else return false;
    }
    return true;
};