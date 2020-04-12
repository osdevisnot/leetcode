// https://leetcode.com/problems/add-two-numbers-ii/
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let getLength = (root) => {
  let count = 0;
  while ((root = root.next)) count++;
  return count;
};

let getCarry = (l1, l2, node, offset) => {
  if (l1 == null || l2 == null) return 0;
  node.next = new ListNode(0);

  let sum = 0;
  if (offset > 0) sum = l1.val + getCarry(l1.next, l2, node.next, offset - 1);
  else
    sum = l1.val + l2.val + getCarry(l1.next, l2.next, node.next, offset - 1);

  node.next.val = sum % 10;
  return Math.floor(sum / 10);
};

let addTwoNumbers = (l1, l2) => {
  let len1 = getLength(l1);
  let len2 = getLength(l2);
  let offset = Math.abs(len1 - len2);
  if (len1 < len2) [l2, l1] = [l1, l2]; // l1 will always be larger list
  let dummy = new ListNode(0);
  dummy.val = getCarry(l1, l2, dummy, offset);
  return dummy.val === 1 ? dummy : dummy.next;
};

let l1 = new ListNode(7);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
l1.next.next.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(addTwoNumbers(l1, l2));
