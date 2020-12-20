function middleNode(head: ListNode | null): ListNode | null | undefined {
  let tortoise: ListNode | null | undefined = new ListNode();
  let hare: ListNode | null = new ListNode();
  hare = head;
  tortoise = head;
  while (hare != null && hare?.next != null) {
    hare = hare.next.next;
    tortoise = tortoise?.next;
  }
  return tortoise;
}
