"use strict";
function isPalindrome(head) {
    let number;
    let reverse;
    let arr = [];
    if (head == null) {
        return true;
    }
    while (head != null) {
        arr.push(head.val);
        head = head.next;
    }
    number = arr.toString();
    reverse = arr.reverse().toString();
    if (number === reverse) {
        return true;
    }
    return false;
}
