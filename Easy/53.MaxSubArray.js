// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadanes algo 
let maxSubArray = (arr) => {
    let prev = 0;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        prev = Math.max(prev + arr[i], arr[i]); // if a[i] <= prev+a[i] then prev = prev +a[i] else prev = a[i]
        max = Math.max(prev, max)
    }
    return max;
}