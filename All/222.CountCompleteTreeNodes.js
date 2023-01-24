// Method 1  - Recursive
var countNodes = function (root) {
  if (!root) return 0;
  else if (!(root.left || root.right)) return 1;
  else return countNodes(root.left) + countNodes(root.right) + 1;
};

// Time Complexity - O(n)

// Method 2
// Link: https://www.youtube.com/watch?v=CvrPf1-flAA
var countNodes = (root) => {
  if (!root) return 0;
  let right = root,
    left = root,
    l = 0,
    r = 0;
  while (left) {
    l = l + 1;
    left = left.left;
  }
  while (right) {
    r = r + 1;
    right = right.right;
  }
  if (l === r) {
    return Math.pow(2, l) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};
