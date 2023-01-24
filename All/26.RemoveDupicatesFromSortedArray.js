/**
 * @param {number[]} nums
 * @return {number}
 */
//  Input: nums = [1,1,2]
//  Output: 2, nums = [1,2]
//  Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
//  It doesn't matter what you leave beyond the returned length.
var removeDuplicates = function (nums) {
    // set i=0, j to 1 and count of nums to be changed to 1 as the 1st element is initially not duplicate 
    if (nums.length < 2) return nums.length;
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        // if i and j elements are different
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
