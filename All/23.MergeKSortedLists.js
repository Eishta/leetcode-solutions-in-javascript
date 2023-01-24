// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.
// Tags - #again, #linkedlist
var mergeKLists = function (lists) {
    let flat = [];
    for (let list of lists) {
        var temp = list;
        while (temp != null) {
            flat.push(temp.val);
            temp = temp.next;
        }
    }
    flat.sort((a, b) => a - b);
    if (!flat.length) return null;
    let head = new ListNode(flat[0]);
    let tail = head;

    for (let ele of flat.slice(1)) {
        tail.next = new ListNode(ele);
        tail = tail.next;
    }
    return head;
};

// better 
var mergeKLists = function (lists) {
    if (lists.length == 0) return null;
    // pick the last list 
    let result = lists.pop();
    while (lists.length) {
        // let result be list a, and pick the list b from the list
        let b = lists.pop();
        // merge the 2 lists and update result, now again result becomes list a and pick another list from end as list b
        result = merge2Lists(result, b);
    }
    return result;
};

function merge2Lists(a, b) {
    let temp = new ListNode();
    let dummy = temp
    while (a && b) {
        if (a.val < b.val) {
            temp.next = a;
            a = a.next;
        }
        else {
            temp.next = b;
            b = b.next;
        }
        temp = temp.next
    }
    if (a) temp.next = a;
    else temp.next = b;
    return dummy.next;
}