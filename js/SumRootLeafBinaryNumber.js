"use strict";
function sumRootToLeaf(root) {
    if (root == null) {
        return 0;
    }
    if (root != null) {
        root = root.right;
        console.log(sumRootToLeaf(root));
    }
    if (root != null) {
        root = root.left;
        console.log(sumRootToLeaf(root));
    }
    return 1;
}
console.log(sumRootToLeaf);
