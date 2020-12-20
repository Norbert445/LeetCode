"use strict";
function maxDepth(root) {
    let count = 0;
    let left;
    let right;
    if (root == null)
        return 0;
    left = maxDepth(root.left);
    right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}
