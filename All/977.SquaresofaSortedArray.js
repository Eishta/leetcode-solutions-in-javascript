// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function (nums) {
    let [i, j, ind] = [0, nums.length - 1, nums.length - 1];
    let temp = [];
    while (i <= j) {
        if (Math.abs(nums[i]) < Math.abs(nums[j])) {
            temp[ind--] = nums[j] * nums[j];
            j--;
        } else {
            temp[ind--] = nums[i] * nums[i];
            i++
        }
    }
    return temp
};