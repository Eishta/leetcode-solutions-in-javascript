// * function Node(val, neighbors) {
//     *    this.val = val === undefined ? 0 : val;
//     *    this.neighbors = neighbors === undefined ? [] : neighbors;
//     * };
var cloneGraph = function (node) {
    var map = {};
    return helper(node);

    function helper(node) {
        if (!node) return;
        if (!map[node.val]) {
            map[node.val] = new Node(node.val); // create a new node as it should be a deep clone and not by reference 
            map[node.val].neighbors = node.neighbors.map(helper);   // traverse all the nodes connected to the current node
        }
        return map[node.val];
    }
};