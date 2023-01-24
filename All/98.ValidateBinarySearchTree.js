// wrong as it will pass for [3,2,5,1,4] also where 4 is greater than 2 but is in left subtree of 3 and should not be there as it is greater than 3
var isValidBST = function (root) {
    if (!root) return true;
    const helper = (root, min, max) => {
        if (root) {
            let left = helper(root.left, min, root.val);
            let right = helper(root.right, root.val, max);
            if (root.val > min && root.val < max && left && right) return true;
            else return false;
        } else return true;
    }
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};



// calculate the inorder of the tree and check if its sorted O(n)

var isValidBST = function (root) {
    function inOrder(node) {
        if (!node) return [];
        return [...inOrder(node.left), node.val, ...inOrder(node.right)]
    }
    const sortedArr = inOrder(root);
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] <= sortedArr[i]) return false;
    }
    return true;
};
