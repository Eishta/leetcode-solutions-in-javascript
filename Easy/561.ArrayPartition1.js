
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),
//  ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
// here it is making pairs of the sorted array
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < nums.length - 1; i += 2) {
        result += Math.min(nums[i], nums[i + 1])
    }
    return result;
};

// leetcode solution
var arrayPairSum = function (nums) {
    let hash = [];
    for (let i = 0; i < 20001; ++i) {
        hash[i] = 0;
    }
    let sum = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < nums.length; ++i) {
        let cur = nums[i] + 10000;
        ++hash[cur];
        min = Math.min(min, cur);
        max = Math.max(max, cur);
    }
    let evenOdd = 0;
    for (let i = min; i <= max; ++i) {
        let curAmount = hash[i];
        for (let j = 0; j < curAmount; ++j) {
            if (evenOdd == 0) {
                sum += i - 10000;
            }
            evenOdd ^= 1;
        }
    }
    return sum;
};