// cannot use toString()
// if x is negative or greater than 2**31  return false

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

const isPlaindrome = (x) => {
    if (x <= 0 || x >= 2 ** 31 - 1) {
        return false
    }
    let result = 0;
    for (let i = x; i; i = Math.trunc(i / 10)) {
        result = result * 10 + i % 10;
    }
    return result === x;
}