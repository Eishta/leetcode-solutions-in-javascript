//  Link - https://leetcode.com/problems/path-sum-ii/
/**
 * we have result = [], sol=[] initaially
 * if there is no root, we return the result directly
 * else , push the current node value to the solution,
 * check if it is leaf node and this path results into targetSum, then push the current soution to the result
 * 
 * call the same for the left and right child by decreasing the sum by the root.val 
 * base condition is when root becomes null
 */
var pathSum = function (root, targetSum) {
    function helper(root, sum, solution, result) {
        if (!root) return result;
        solution.push(root.val)
        if (!root.left && !root.right && root.val === sum) {
            result.push([...solution]);
        }
        helper(root.left, sum - root.val, solution, result);
        helper(root.right, sum - root.val, solution, result);
        solution.pop();
        return result;
    }
    return helper(root, targetSum, [], []);
};

// TimeComplexity = O(n)