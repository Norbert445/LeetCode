function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null) {
    return null;
  }
  if (root == null) return null;
  while (root) {
    if (val > root.val) {
      root = root.right;
    } else if (val < root.val) {
      root = root.left;
    } else return root;
  }
  return null;
}
