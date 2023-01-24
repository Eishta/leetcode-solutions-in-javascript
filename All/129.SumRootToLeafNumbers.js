var sumNumbers = function (root) {
    function helper(root, result, sol) {
        if (!root) return 0;
        sol = sol * 10 + root.val;
        if (!root.left && !root.right) {
            result.push(sol);
            sol = (sol - root.val) / 10;
        }
        helper(root.left, result, sol);
        helper(root.right, result, sol);
        return result;
    }
    const result = helper(root, [], 0);
    return result.reduce((a, c) => a + c, 0)
};



// Method 2
var sumNumbers = function(root) {
    
    function traverse(node, num) {
        if(!node) return null;
        num += node.val
        if(!node.left && !node.right) return +num; // return it as a number
        return traverse(node.left, num) + traverse(node.right, num);
    }
    return traverse(root, ''); // use sum as a string so that it will be concatinated
};

