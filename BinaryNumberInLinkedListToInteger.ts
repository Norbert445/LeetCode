class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getDecimalValue(head: ListNode | null): number {
  let arr: number[] = [];
  let i: number;
  let j: number = 1;
  let result: number = 0;

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
