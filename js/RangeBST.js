"use strict";
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function rangeSumBST(root, low, high) {
    let sum = 0;
    if (root == null) {
        return sum;
    }
    const dfs = (node) => {
        if (node == null)
            return null;
        dfs(node.left);
        dfs(node.right);
        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }
    };
    dfs(root);
    return sum;
}
