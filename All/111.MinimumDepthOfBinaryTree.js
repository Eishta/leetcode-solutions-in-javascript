let minDepth = root => {
    if (!root) return 0;
    else {
        let depth = 1;
        let q = [root];
        while (q.length) {
            let l = q.length;
            for (let i = 0; i < l; i++) {
                let node = q.shift();
                // when both left and right of node are null => leaf node 
                if (!node.left && !node.right) return depth;
                node.left && q.push(node.left);
                node.right && q.push(node.right);
            }
            depth++;
        }
        return depth
    }
}


// #Tree #Recursion
let minDepthRec = root => {
    if (!root) return 0;
    let l = root.left ? minDepth(root.left) : Infinity;
    let r = root.right ? minDepth(root.right) : Infinity;
    return Math.min(l, r) + 1;
}