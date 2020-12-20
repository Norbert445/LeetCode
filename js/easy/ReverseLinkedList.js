"use strict";
function reverseList(head) {
    let prev = null;
    let nextNode;
    while (head != null) {
        nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    return prev;
}
