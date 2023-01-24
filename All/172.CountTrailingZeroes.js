// Given an integer n, return the number of trailing zeroes in n!.(log time)
// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

var trailingZeroes = function (n) {
    if (n < 5) return 0;
    let count = 0;
    while (n >= 5) {
        count += Math.floor(n / 5);
        n = Math.floor(n / 5)
    }
    return count;
};