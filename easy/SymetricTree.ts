import { checkPropTypes } from "prop-types";

function isSymmetric(root: TreeNode | any): boolean {
  const check = (
    leftsub: TreeNode | any,
    rightsub: TreeNode | any
  ): boolean => {
    if (leftsub == null && rightsub == null) {
      return true;
    } else if (leftsub != null && rightsub != null) {
      return (
        leftsub.val == rightsub.val &&
        check(leftsub.left, rightsub.right) &&
        check(leftsub.right, rightsub.left)
      );
    }
    return false;
  };

  return root == null || check(root.left, root.right);
}
