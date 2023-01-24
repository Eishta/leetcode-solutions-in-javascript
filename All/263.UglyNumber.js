// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Input: n = 8
// Output: true
// Explanation: 8 = 2 × 2 × 2

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

var isUgly = function (n) {
    if (n <= 0) return false;
    else if (n == 1) return true;
    else {
        for (let x of [2, 3, 5]) {
            while (n % x === 0) {
                n = n / x;
            }
        }
        return n == 1;
    }
};


var isUgly = function (n) {
    [2, 3, 5].forEach(ele => {
        while (n % ele === 0 && n !== 0) {
            n = Math.floor(n / ele);
        }
    })
    return n == 1 ? true : false
};