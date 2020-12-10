import { timeStamp } from "console";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null;
  }

  const exchange = (root: TreeNode | null | any) => {
    let temp: TreeNode | null;
    temp = root.right;
    root.right = root.left;
    root.left = temp;
    if (root.right != null) {
      exchange(root.right);
    }
    if (root.left != null) {
      exchange(root.left);
    }
  };
  exchange(root);

  return root;
}
