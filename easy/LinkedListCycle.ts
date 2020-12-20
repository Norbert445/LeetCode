function hasCycle(head: ListNode | null): boolean {
  let fast: ListNode | null | undefined = head;
  let slow: ListNode | null | undefined = head;

  while (fast?.next != null) {
    slow = slow?.next;
    fast = fast?.next?.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
}
