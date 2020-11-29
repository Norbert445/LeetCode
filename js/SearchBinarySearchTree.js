"use strict";
function searchBST(root, val) {
    if (root == null) {
        return null;
    }
    const dfs = (node) => {
        if (node == null)
            return null;
        dfs(node.right);
        if (node.val === val) {
            return node;
        }
        dfs(node.left);
        if (node.val === val) {
            return node;
        }
    };
    dfs(root);
    return null;
}
