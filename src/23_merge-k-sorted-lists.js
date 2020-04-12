// https://leetcode.com/problems/merge-k-sorted-lists/
let mergeKLists = (lists) => {
  let result = new ListNode('^'),
    done = false,
    len = lists.length;

  let current = result;

  while (!done) {
    let min = Infinity,
      minIndex = -1;

    for (let idx = 0; idx < len; idx++) {
      if (lists[idx] && lists[idx].val < min) {
        min = lists[idx].val;
        minIndex = idx;
      }
    }

    if (minIndex === -1) {
      done = true;
    } else {
      current.next = new ListNode(lists[minIndex].val);
      current = current.next;
      lists[minIndex] = lists[minIndex].next;
    }
  }
  return result.next;
};
