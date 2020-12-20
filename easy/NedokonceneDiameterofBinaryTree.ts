function diameterOfBinaryTree(root: TreeNode | null): number {
  let path: number = 0;

  const maxPath = (root: TreeNode | any): number => {
    if (root.left != null && root.right != null) {
      return path + 1 + Math.max(maxPath(root.left), maxPath(root.right));
    } else if (root.left != null) {
      return path + 1 + maxPath(root.left);
    } else if (root.right != null) {
      return path + 1 + maxPath(root.right);
    } else {
      return path + 1;
    }
  };

  maxPath(root);

  return path;
}
