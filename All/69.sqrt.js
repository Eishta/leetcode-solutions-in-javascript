// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

// Input: x = 4
// Output: 2
// Link : https://www.youtube.com/watch?v=VYtEKhxKd1Q

// Tags - #binarysearch

var mySqrt = function (x) {
    let left = 1;
    let right = x;
    if (x < 2) return x;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (mid * mid === x) return mid;
        else if (mid * mid < x) left = mid + 1;
        else right = mid;
    }
    return left - 1;
};

