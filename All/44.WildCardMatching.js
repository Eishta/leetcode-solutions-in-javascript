// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).

// Link: https://www.youtube.com/watch?v=NbgUZAoIz3g

var isMatch = function (s, p) {
  let dp = Array(p.length + 1)
    .fill()
    .map(() => Array(s.length + 1));
  for (let i = dp.length - 1; i >= 0; i--) {
    for (let j = dp[0].length - 1; j >= 0; j--) {
      if (i == dp.length - 1 && j == dp[0].length - 1) {
        dp[i][j] = true;
      } else if (i == dp.length - 1) {
        dp[i][j] = false;
      } else if (j == dp[0].length - 1) {
        dp[i][j] = p[i] == "*" ? dp[i + 1][j] : false;
      } else {
        dp[i][j] =
          s[j] === p[i] || p[i] === "?"
            ? dp[i + 1][j + 1]
            : p[i] === "*"
            ? dp[i + 1][j] || dp[i][j + 1]
            : false;
      }
    }
  }
  return dp[0][0];
};

// Recursive with Memo

let isMatch = function (s, p) {
  // row - pattern , col - string
  let dp = Array(p.length + 1)
    .fill()
    .map((ele) => Array(s.length + 1).fill(-1));

  function solve(i, j) {
    if (dp[i][j] !== -1) return dp[i][j];
    // if both reaches end , return true
    if (i === p.length && j == s.length) dp[i][j] = true;
    // if only pattern ends
    else if (i == p.length) dp[i][j] = false;
    // if only the string ends,
    // if the pattern at i is * move to next index of the pattern
    // else false
    else if (j == s.length) dp[i][j] = p[i] == "*" ? solve(i + 1, j) : false;
    else
      dp[i][j] =
        s[j] === p[i] || p[i] == "?"
          ? solve(i + 1, j + 1)
          : p[i] == "*"
          ? solve(i + 1, j) || solve(i, j + 1)
          : false;

    return dp[i][j];
  }

  // start with index 0, 0
  return solve(0, 0);
};
