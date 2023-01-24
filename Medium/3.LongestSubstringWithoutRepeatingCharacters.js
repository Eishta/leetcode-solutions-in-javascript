// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * Explanation:- keep a dictionary to store the position of each char in the string
 *  * Everytime  in the loop if the current char is already present in the 'seen', 
 *  * update the left variable to point to just next position stored in seen - abac- seen={a: 0, b:1}, now when right = 2 cur char = a again
 *  * so now update the position to seen[a] + 1 =>  left becomes = > seen[a]+1= 1 and seen[a]= right => 2 
 *  * now left= 1 and seen={a: 2, b:1 }, longest = 2  => 'ba'
 */
var lengthOfLongestSubstring = function (s) {
    let [n, left, right, cur] = [s.length, 0, 0, ''];
    let seen = {};
    let longest = 0;
    while (right < n) {
        cur = s[right];
        if (seen[cur] !== undefined && seen[cur] >= left) {
            left = seen[cur] + 1;
        }
        longest = Math.max(longest, right - left + 1)
        seen[cur] = right;
        right++;
    }
    return longest;
};