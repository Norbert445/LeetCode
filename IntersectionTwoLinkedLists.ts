function getIntersectionNode(
  headA: ListNode | any,
  headB: ListNode | any
): ListNode | null {
  let arr: any = [];
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
