"use strict";
function hasCycle(head) {
    var _a;
    let fast = head;
    let slow = head;
    while ((fast === null || fast === void 0 ? void 0 : fast.next) != null) {
        slow = slow === null || slow === void 0 ? void 0 : slow.next;
        fast = (_a = fast === null || fast === void 0 ? void 0 : fast.next) === null || _a === void 0 ? void 0 : _a.next;
        if (fast == slow) {
            return true;
        }
    }
    return false;
}
