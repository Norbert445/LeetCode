"use strict";
function searchBST(root, val) {
    if (root == null) {
        return null;
    }
    if (root == null)
        return null;
    while (root) {
        if (val > root.val) {
            root = root.right;
        }
        else if (val < root.val) {
            root = root.left;
        }
        else
            return root;
    }
    return null;
}
