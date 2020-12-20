function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head1: any = l1;
  let head2: any = l2;
  let arr: number[] = [];
  let merged: any;

  if (head1 == null && head2 == null) {
    return null;
  }

  while (head1 != null) {
    arr.push(head1.val);
    head1 = head1.next;
  }
  while (head2 != null) {
    arr.push(head2.val);
    head2 = head2.next;
  }

  arr = arr.sort((a, b) => b - a);

  arr.forEach((num) => {
    if (!merged) {
      merged = new ListNode(num);
    } else {
      merged = new ListNode(num, merged);
    }
  });
  return merged;
}
