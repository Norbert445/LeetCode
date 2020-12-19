"use strict";
function getIntersectionNode(headA, headB) {
    let arr = [];
    while (headA != null) {
        arr.push(headA);
        headA = headA.next;
    }
    while (headB != null) {
        if (arr.includes(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
}
