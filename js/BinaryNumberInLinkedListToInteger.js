"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function getDecimalValue(head) {
    let arr = [];
    let i;
    let j = 1;
    let result = 0;
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    for (i = arr.length - 1; i >= 0; i--) {
        result += arr[i] * j;
        j *= 2;
    }
    return result;
}
