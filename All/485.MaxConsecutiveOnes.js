// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// my solution => can be used for any number
var findMaxConsecutiveOnes = function (nums) {
    let longest = 0, left = 0, right = 0;
    while (right < nums.length) {
        if (nums[right] == 0) {
            longest = Math.max(longest, right - left);
            left = right + 1;
        }
        right++;
    }
    return Math.max(longest, right - left);
};


var findMaxConsecutiveOnes = function(nums) {
    let max = 0, count = 0;
    for(let ele of nums){
        if(!ele) count = 0
        else max = Math.max(++count , max)
    }
    return max;
};

