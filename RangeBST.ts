class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function rangeSum(root: TreeNode | null, low: number, high: number): number {
  let sum: number = 0;
  if (root == null) {
    return sum;
  }
  const dfs = (node: TreeNode | null) => {
    if (node == null) return null;
    dfs(node.left);
    dfs(node.right);
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
  };
  dfs(root);
  return sum;
}
