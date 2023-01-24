// Method 1 - DP


// O(2 ^ (m + n)) - we know that the formula we use to determine the time complexity for recursivity is (branches ^ depth). 
// In our case we have 2 possible branches (going up and going left), while for the depth, is the maximum possible distance taken to get 0,
// 0 which is m + n. Given this, we can also mention the space complexity taken on the stack O(m + n);

// Link: https://www.youtube.com/watch?v=rBAxUTqvlQA
var uniquePaths = function (m, n) {
    let dp = Array(m).fill().map(() => Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 1; // as we can only move either right or down , so there is only one unique path to reach to any point in first row and first column
            }
            else {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
            }
        }
    }
    return dp[m - 1][n - 1]
};


// Method 2
// using Formula 
// Link: https://www.youtube.com/watch?v=t_f0nwwdg5o
var uniquePaths = function(m, n) {
    let N  = m + n -2 ;// m-1 + n-1 = total moves to reach destination
    let r = Math.min(m-1, n-1); 
    let res = 1;
    for(let i=1;i<=r;i++){
        res = res *((N-i+1)/i);
    }
    return Math.round(res);
};
