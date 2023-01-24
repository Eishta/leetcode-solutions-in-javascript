// 1.   take 3 variables :-
//      prev=  keeps track of previously processed node
//      first = the first node which is violates recoverBST, gretaer than the next node value => will be updated only once the first time
//      second = the second node that violates BST rules=>  will be updated always

// 2.   inorder helprer => inorder traversal of BST is always sorted so it will help in checking if any node violates the BST rules
//      call inorder on root and then process the left est node first and then backtrack, => left , root, right
// 3.   when we have the first and second and the tree is completely traversed , swap the values in first and second

var recoverTree = function (root) {
  if (!root) return;
  let first, sec, prev;

  function inOrder(root) {
    if (!root) return;
    inOrder(root.left);

    if (prev && prev.val > root.val) {
      if (!first) first = prev;
      sec = root;
    }
    prev = root;
    inOrder(root.right);
  }
  inOrder(root);

  let temp = first.val;
  first.val = sec.val;
  sec.val = temp;
};

// TC = O(n) - traversing all nodes
// SC = O(1)
