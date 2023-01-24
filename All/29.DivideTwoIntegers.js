// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// https://www.youtube.com/watch?v=8eNsG6OI4EM
// Return the quotient after dividing dividend by divisor.
// every time we double the divisor and check if is less than or equal to the dividend.
// we stop at a value greater than the dividend
// example-  113/3
// 3   6   12  24  48  96  192     -> 192 > 113 count = 32 & dividend = 113-96=17
// 1   2   4   8   16  32  64  

// 17/3
// 3   6   12  24  -> 24>17 => count = 4 , dividend = 17-12=5
// 1   2   4   8

// 5/3
// 3   6 -> 6> 5 , count=1, dividend = 5-3 = 2
// 1   2

// 2/3=> dividend < divisor => return 0;
// count = 32 + 4 + 1 + 0 => 37
var divide = function (dividend, divisor) {
    if (!dividend || !divisor) { return 0 }
    let isNeg;
    // check if any is negative
    if ((dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0)) {
        isNeg = true;
    }
    // make both positive
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let count = 0;
    count = longDivide(dividend, divisor);
    if (count >= Math.pow(2, 31) - 1) {
        if (isNeg) {
            return -Math.pow(2, 31);
        }
        else return Math.pow(2, 31) - 1;
    }
    else return isNeg ? -count : count;
};

var longDivide = function (lDividend, lDivisor) {
    if (lDividend < lDivisor) {
        return 0;
    }
    let [count, sum] = [1, lDivisor];
    while ((2 * sum) <= lDividend) {
        sum *= 2;
        count *= 2;
    }
    return count + longDivide(lDividend - sum, lDivisor)
}