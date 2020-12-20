"use strict";
function middleNode(head) {
    let tortoise = new ListNode();
    let hare = new ListNode();
    hare = head;
    tortoise = head;
    while (hare != null && (hare === null || hare === void 0 ? void 0 : hare.next) != null) {
        hare = hare.next.next;
        tortoise = tortoise === null || tortoise === void 0 ? void 0 : tortoise.next;
    }
    return tortoise;
}
