"use strict";
function diameterOfBinaryTree(root) {
    let path = 0;
    const maxPath = (root) => {
        if (root.left != null && root.right != null) {
            return path + 1 + Math.max(maxPath(root.left), maxPath(root.right));
        }
        else if (root.left != null) {
            return path + 1 + maxPath(root.left);
        }
        else if (root.right != null) {
            return path + 1 + maxPath(root.right);
        }
        else {
            return path + 1;
        }
    };
    maxPath(root);
    return path;
}
