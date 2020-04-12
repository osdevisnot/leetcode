// https://leetcode.com/problems/merge-two-sorted-lists/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let mergeTwoLists = (l1, l2) => {
  let result = new ListNode('^');
  let current = result;
  while (l1 || l2) {
    let min;
    if (!l2 || (l1 && l1.val <= l2.val)) {
      min = l1.val;
      l1 = l1.next;
    } else if (!l1 || (l2 && l2.val <= l1.val)) {
      min = l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode(min);
    current = current.next;
  }
  return result.next;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
console.log(JSON.stringify(mergeTwoLists(l1, l2)));
