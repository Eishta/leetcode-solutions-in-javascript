// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// my solution
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



// one liner
var findMaxConsecutiveOnes = function (nums) {
    return Math.max(...nums.join('').split('0').map(ones => ones.length));
};

// leetcode solution by someone
let findMaxConsecutiveOnes = nums => {
    // curr= curent count of 1's, max = maximum count 0f 1's till now
    let curr = 0, max = 0;
    // for every value in nums
    for (let k of nums) {
        max = Math.max(max, curr += k);   // adds 1 or 0 to the curr count => if 1 is found then increase the count else it remains the same
        if (!k) curr = 0;    // if 0 is found , reinitialise the current count to 0
    }
    return max;

}
