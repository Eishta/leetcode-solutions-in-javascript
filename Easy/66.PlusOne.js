// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123

/**
 * @param {number[]} A
 * @return {number[]}
 */
var plusOne = function (A) {
    let index = A.length - 1;
    let carry = 1;
    while (carry) {
        if (index < 0) {
            A.unshift(1)
        }
        else {
            A[index] += 1;
        }
        if (A[index] > 9) {//  as the digits array conatin values from 1 to 9, so the max value can be 10 , 
            A[index] = 0; // 10 % 10 = 0
            index--;
        }
        else {
            carry = 0;
        }
    }
    return A;
};

// using ternary operator
let d = (A) => {
    let index = A.length - 1, carry = 1;
    while (carry) {
        if (index >= 0) {
            A[index] = A[index] + 1 > 9 ? (carry = 1, A[index] = 0) : (carry = 0, A[index] = A[index] + 1);
            index = index - 1;
        }
        else {
            A.unshift(1);
            carry = 0;
        }
    }
    while (A[0] === 0) A.shift()
    return A;
}


// Method 3
var plusOne = function (digits) {
    let i = digits.length - 1;
    let carry = 1;
    while (carry || i >= 0) {
        if (i < 0) {
            digits = [1, ...digits];
            break;
        }
        let sum = digits[i] + 1;
        if (sum > 9) {
            digits[i] = sum - 10;
            carry = 1;
        }
        else {
            digits[i] = sum;
            break;
        }
        i--;
    }
    return digits;
};
