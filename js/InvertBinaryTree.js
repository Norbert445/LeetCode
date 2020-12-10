"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function invertTree(root) {
    if (root == null) {
        return null;
    }
    const exchange = (root) => {
        let temp;
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
