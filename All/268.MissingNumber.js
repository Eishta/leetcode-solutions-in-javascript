// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.
// Input: nums = [3,0,1]
// Output: 2


// method 1
var missingNumber = function (nums) {
  let n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + i + 1 - nums[i]
  }
  return sum;
};

// method 2
var missingNumber = function (nums) {

  return nums.reduce((sum, ele, i) => sum + i + 1 - ele, 0);

};

// method 3
var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    nums[i] && (sum -= nums[i]);
    sum += i;
  }
  return sum;
};