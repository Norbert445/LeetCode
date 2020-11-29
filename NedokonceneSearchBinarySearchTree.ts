function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null) {
    return null;
  }
  const dfs = (node: TreeNode | null) => {
    if (node == null) return null;
    dfs(node.right);
    if (node.val === val) {
      return node;
    }
    dfs(node.left);
    if (node.val === val) {
      return node;
    }
  };
  dfs(root);
  return null;
}
