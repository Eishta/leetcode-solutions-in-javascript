// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
    let map = new Map();
    let size = Math.floor(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
        if (map[nums[i]] > size) return nums[i];
    }
};
// [2,2,1,1,1,2,2]
//Moore algorithm
var majorityElement = function (nums) {
    let [count, major] = [1, nums[0]];
    for (let i = 1; i < nums.length; i++) {

        if (nums[i] !== major) count--;
        else count++;
        if (count == 0) {
            major = nums[i];
            count = 1;
        }
    }
    return major;
};