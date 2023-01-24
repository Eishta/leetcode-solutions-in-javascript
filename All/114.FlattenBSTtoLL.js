/**
 * https://www.youtube.com/watch?v=rKnD7rLT0lI
 * TODO
 *  flatten left subtree, return its tail node 'leftTail'
(2) flatten right subtree, return its tail node 'rightTail'
(3) if left subtree exists and has been flattened, we need to move it to the right:
set flattened right subtree as leftTail.right
set flattened left subtree to be the new right subtree(root.right)
set root.left=null
(4) return the tail node of this flattened tree (return rightTail if it isn't null, else return leftTail if it isn't null, else return root)} root 
 */
var flatten = function (root) {

    function helper(root) {
        if (!root) return;
        let leftTail = helper(root.left);
        let rightTail = helper(root.right);

        if (root.left) {
            leftTail.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        return rightTail || leftTail || root;
    }
    helper(root)
};