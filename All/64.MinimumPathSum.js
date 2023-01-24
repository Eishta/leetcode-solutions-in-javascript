// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12
// https://leetcode.com/problems/minimum-path-sum/discuss/344980/Java.-Details-from-Recursion-to-DP.

var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let dp = Array(m).fill().map(() => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) { dp[i][j] = grid[i][j]; }
            else if (i == 0) {
                dp[i][j] = grid[i][j] + dp[i][j - 1];  // can be reached through only one path
            }
            else if (j == 0) {
                dp[i][j] = grid[i][j] + dp[i - 1][j]; // can be reached through only one path
            }
            else {
                dp[i][j] = Math.min(grid[i][j] + dp[i - 1][j], grid[i][j] + dp[i][j - 1]) // can be reached through only either top or left , so we take the min from both
            }
        }
    }
    return dp[m - 1][n - 1];
};
