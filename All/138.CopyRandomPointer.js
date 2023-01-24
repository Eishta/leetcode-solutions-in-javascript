// 1st
var copyRandomList = function (head) {
  if (!head) return null;
  let node = head;
  // create clone nodes and attach them just next to the origional node in origional list
  // initially - o1 -> o2-> o3 -> null
  // after - o1 -> copy1-> o2 -> copy2 -> o3 -> copy3 -> null
  while (node) {
    let next = node.next;
    let copy = new Node(node.val);
    copy.next = next;
    node.next = copy;
    node = next;
  }

  // update the random pointers
  /// if o1.random == o2
  // copy1.random == o1.random.next as the clone of each node is attached next to it
  node = head;
  while (node) {
    if (node.random) {
      let random = node.random;
      node.next.random = random.next;
    }
    node = node.next.next;
  }
  // restore the origional list and separate the cloned list
  node = head;
  let clone = new Node();
  let dummy = clone;
  while (node) {
    let next = node.next.next; // next origional node
    // attach the cloned nodes
    clone.next = node.next; // attach to the clones list
    clone = clone.next;

    // seprate the origional list by updating pointers
    node.next = next;
    node = next;
  }
  return dummy.next;
};

// var copyRandomList = function(head) {
//     if(!head)return null;
//     let clone = new Node();
//     let dummy = clone;
//     let node = head;
//     let map = new WeakMap();
//     while(node){
//         clone.next = new Node();
//         let n = clone.next;
//         n.val = node.val;
//         map.set(node, n);
//         node = node.next;
//         clone = clone.next;
//     }
//     node = head;
//     // clone = dummy.next;
//     while(node){
//         let clone = map.get(node);
//         // console.log(clone.val, node.val)
//         let random = node.random;
//         clone.random = random ? map.get(random): null;
//         node = node.next;
//     }
//     return dummy.next

// };
