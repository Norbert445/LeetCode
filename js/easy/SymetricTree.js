"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSymmetric(root) {
    const check = (leftsub, rightsub) => {
        if (leftsub == null && rightsub == null) {
            return true;
        }
        else if (leftsub != null && rightsub != null) {
            return (leftsub.val == rightsub.val &&
                check(leftsub.left, rightsub.right) &&
                check(leftsub.right, rightsub.left));
        }
        return false;
    };
    return root == null || check(root.left, root.right);
}
