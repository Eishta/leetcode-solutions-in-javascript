
var lexicalOrder = function (n) {
    let sol = [];
    for (let i = 1; i < 10; i++) {
        dfs(i, n, sol)
    }
    return sol;
};

let dfs = (i, n, sol) => {
    if (i > n) return;
    sol.push(i);
    for (let j = 0; j < 10; j++) {
        dfs(i * 10 + j, n, sol);
    }

}

// Input: n = 13
// Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]