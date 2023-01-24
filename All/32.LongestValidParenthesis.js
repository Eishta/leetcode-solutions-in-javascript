// Given a string containing just the characters '(' and ')', 
// find the length of the longest valid (well-formed) parentheses substring.

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Link: https://www.youtube.com/watch?v=r0-zx5ejdq0

// Tags - #again , #revise
var longestValidParentheses = function (s) {
    let stack = [-1];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];
        // if there is opening bracket i stack and a closing bracket in the string
        if (s[top] === '(' && s[i] === ')') {
            stack.pop();
            let newTop = stack[stack.length - 1];
            max = Math.max(i - newTop, max)
        } else stack.push(i); //=> push the index
    }
    return max;
};

// Method 2- Dynamic programming
// Link: https://www.youtube.com/watch?v=ukyRR0oIAHU

let longestValidParentheses = (s) => {
    // dp[i+1] => length of valid paranthesis which includes arr[i]
    // )()()( -> when i = 5 => arr[i] = '(' -> so the length of valid paranthesis includiing arr[5] = 0 bcz ()()( is not valid
    let dp = Array(s.length + 1).fill(0); 
    let max = 0;
    // i is the index of the array
    for (let i = 1; i < s.length; i++) {
        // j = i - length of the valid paranthesis till i - 1 => to reach index 0 in this case
        let j = i - dp[i] - 1;
        // when i = 5, dp[5] = dp[4+1] = 4 as the valid paran length till there is 4 
        // j = 5 - dp[5] - 1 = 5 - 4 - 1 = 0
        // j = 0 when i = 5

        // s[j] = s[0] = ) and s[i] = s[5] = ( , so it remains 0 at dp[6]  
        if (s[j] === '(' && j >= 0 && s[i] === ')') {
            // dp[i+1] = valid paran length till i + valid paran length till j + 2(for the paranthesis at s[i] and s[j])
            dp[i + 1] = dp[i] + dp[j] + 2;
            max = Math.max(max, dp[i + 1])
        }
    }
    return max;
}