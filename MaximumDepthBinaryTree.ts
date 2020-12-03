function maxDepth(root: TreeNode | null): number {
  let count: number = 0;
  let left: number;
  let right: number;
  if (root == null) return 0;

  left = maxDepth(root.left);
  right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}
