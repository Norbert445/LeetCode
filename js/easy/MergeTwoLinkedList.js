"use strict";
function mergeTwoLists(l1, l2) {
    let head1 = l1;
    let head2 = l2;
    let arr = [];
    let merged;
    if (head1 == null && head2 == null) {
        return null;
    }
    while (head1 != null) {
        arr.push(head1.val);
        head1 = head1.next;
    }
    while (head2 != null) {
        arr.push(head2.val);
        head2 = head2.next;
    }
    arr = arr.sort((a, b) => b - a);
    arr.forEach((num) => {
        if (!merged) {
            merged = new ListNode(num);
        }
        else {
            merged = new ListNode(num, merged);
        }
    });
    return merged;
}
