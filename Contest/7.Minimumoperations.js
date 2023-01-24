// You are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.
// Input: nums = [1,5,0,3,5]
// Output: 3

var minimumOperations = function (nums) {
    let min = 0;
    let cur = Infinity;
    let op = 0;
    let isZero = [];
    let i = 0;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            nums[i] -= min;
            cur = nums[i] !== 0 ? Math.min(cur, nums[i]) : cur;
        }
        if (nums[i] === 0)
            isZero.push(nums[i])

        if (i === nums.length - 1) {
            op++;
            if (isZero.length === nums.length) break;
            else {
                isZero = [];
                i = 0; min = cur;
                cur = Infinity;
            }
        } else i++;


    }
    return op - 1;
};