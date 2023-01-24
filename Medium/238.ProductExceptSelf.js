// Q. Given an integer array nums,
//  return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// Example:- 
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// 1. Time = O(n) Space= O(n)

var productExceptSelf = function (nums) {
    if (nums.length <= 1) return nums;
    let [left, n, output] = [[], nums.length, []];
    let right = Array(n).fill(1);
    let p = 1;
    for (let i = 0; i < n; i++) {
        p *= nums[i];
        left.push(p);
    }
    p = 1;
    for (let i = n - 1; i >= 0; i--) {
        p *= nums[i];
        right[i] = p;
    }
    output[0] = right[1];
    output[n - 1] = left[n - 2];
    for (let i = 1; i <= n - 2; i++) {
        output[i] = left[i - 1] * right[i + 1]
    }
    return output;
};

// 2. Time= O(n) , Space = O(1)
var productExceptSelf = function (nums) {
    if (nums.length <= 1) return nums;
    let p = 1;
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        p = p * nums[i];
        output.push(p);
    }
    p = 1;
    for (let i = nums.length - 1; i > 0; i--) {
        output[i] = output[i - 1] * p;
        p *= nums[i];
    }
    output[0] = p;
    return output;
};