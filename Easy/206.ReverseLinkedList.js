// #recursive  #linkedlist
var reverseList = function (head) {
    function solve(cur, pre) {
        if (cur == null) return pre;
        let next = cur.next;
        cur.next = pre;
        return solve(next, cur);
    }
    return solve(head, null)
}

// #iterative

var reverseList = function (head) {
    let pre = null, cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur, cur = next;
    }
    return pre;
};