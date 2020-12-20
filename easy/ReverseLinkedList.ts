function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let nextNode: ListNode | null;

  while (head != null) {
    nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
}
