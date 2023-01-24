// 2400. Number of Ways to Reach a Position After Exactly k Steps
// recursion, memoisation
// Link - https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/

var numberOfWays = function (startPos, endPos, k) {
    let dp = new Map();
    const mod = 1e9 + 7;
    const getKey = (i, j) => `${i},${j}`;
    function solve(i, steps) {
        if (steps < 0) return 0;
        if (steps == 0 && i === endPos) {
            return 1;
        }
        if (dp.has(getKey(i, steps))) return dp.get(getKey(i, steps))
        let left = solve(i - 1, steps - 1) % mod;
        let right = solve(i + 1, steps - 1) % mod;
        let ans = (left + right) % mod;
        dp.set(getKey(i, steps), ans);
        return ans;
    }
    return solve(startPos, k) % mod;
};

