function isPalindrome(head: ListNode | null): boolean {
  let number: string;
  let reverse: string;
  let arr: number[] = [];
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
