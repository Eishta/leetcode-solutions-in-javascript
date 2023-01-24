// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

var sortedArrayToBST = function (nums) {
    return buildTree(nums, 0, nums.length - 1)
};

var buildTree = function (nums, start, end) {
    if (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode(nums[mid]);
        node.left = buildTree(nums, start, mid - 1);
        node.right = buildTree(nums, mid + 1, end);
        return node;
    }
    return null;

}