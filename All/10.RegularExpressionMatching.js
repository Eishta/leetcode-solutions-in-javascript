// https://leetcode.com/problems/regular-expression-matching/
/**
 * https://www.youtube.com/watch?v=DJvw8jCmxUU - dp
 * https://www.youtube.com/watch?v=HAA8mgxlov8 -- recursive
 */

// example:--
// Input: s = "aa", p = "a"
// Output: false

// Input: s = "ab", p = ".*"
// Output: true

// Tags - #dp, #again

var isMatch = function (s, p) {
    let dp = Array(p.length + 1).fill().map(() => Array(s.length + 1));
    for (let i = 0; i <= p.length; i++) {
        for (let j = 0; j <= s.length; j++) {
            // if both p and s are at index 0, no char in each so both have ended and match so return true
            if (i == 0 & j == 0) {
                dp[i][j] = true;
            }
            // pattern ended but not the string, return false
            else if (i == 0) {
                dp[i][j] = false;
            }
            // string ended
            else if (j == 0) {
                const pc = p[i - 1];
                if (pc === '*') {
                    dp[i][j] = dp[i - 2][j];
                }
                else {
                    dp[i][j] = false;
                }
            }
            else {
                const sc = s[j - 1];
                const pc = p[i - 1];
                if (pc === '*') {
                    dp[i][j] = dp[i - 2][j];
                    const pclc = p[i - 2];
                    if (pclc === sc || pclc === '.') {
                        dp[i][j] = dp[i][j] || dp[i][j - 1];
                    }
                }
                else if (pc === sc || pc === '.') {
                    dp[i][j] = dp[i - 1][j - 1];
                }
                else {
                    dp[i][j] = false;
                }
            }
        }
    }
    return dp[p.length][s.length];
};