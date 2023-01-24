// Input: nums = [3,2,1]
// Output: 1
// Explanation: The third maximum is 1.

// Input: nums = [1,2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// My Solution 
var thirdMax = function (nums) {
    let first = -Infinity, sec = -Infinity, third = -Infinity;
    if (nums.length < 3) return Math.max(...nums);
    else {
        nums.forEach(ele => {
            if (ele > first) {
                third = sec;
                sec = first;
                first = ele;
            }
            else if (ele > sec && ele !== first) {
                third = sec;
                sec = ele;
            }
            else if (ele > third && ele !== first && ele !== sec) {
                third = ele;
            }
        })
    }
    return third !== -Infinity ? third : first;
};
// Submitted by others
var thirdMax = function (nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
        if (nums[i] > first) {
            [first, second, third] = [nums[i], first, second];
        } else if (nums[i] > second) {
            [second, third] = [nums[i], second];
        } else if (nums[i] > third) {
            third = nums[i];
        }
    }
    return third === -Infinity ? first : third;
};