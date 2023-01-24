// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Link: https://www.youtube.com/watch?v=AuYujVj646Q

var minDistance = function (word1, word2) {
    // edge cases - when either of the string is empty we have to perform either all insert or all remove operations 
    // if (word1.length === 0) return word2.length;
    // if (word2.length === 0) return word1.length;
    let dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1));
    // word1 represented by rows and word2 represented by cols

    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            // if first string is empty, we insert all chars of second string
            if (i == 0) dp[i][j] = j;
            // if second string is empty, we remove all chars of first string
            else if (j == 0) dp[i][j] = i;
            // if last chars of both strings are equal, ignore last and recur for remaining
            else if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            // if last char is diff, consider all other possibilities
            else dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], // replace
                dp[i - 1][j], // remove
                dp[i][j - 1]); // insert
        }
    }
    return dp[word1.length][word2.length];
};

// Recursion
var minDistance = (w1, w2) => {
    let dp = Array(w1.length + 1).fill().map(ele => Array(w2.length).fill(0))
    function solve(i, j) {
        if (dp[i][j]) return dp[i][j]
        if (i == 0) dp[i][j] = j;
        else if (j == 0) dp[i][j] = i;
        else if (w1[i - 1] === w2[j - 1]) dp[i][j] = solve(i - 1, j - 1);
        else dp[i][j] = 1 + Math.min(solve(i - 1, j - 1), solve(i, j - 1), solve(i - 1, j));
        return dp[i][j];
    }
    return solve(w1.length, w2.length);
}