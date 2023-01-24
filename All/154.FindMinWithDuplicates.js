// https://www.youtube.com/watch?v=j3187M1P2Xg

// Input: nums = [2,2,2,0,1]
// Output: 0

var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] > nums[r]) l = mid + 1; // if the right part is unsorted
    else if (nums[mid] < nums[r]) r = mid; // if the right part is sorted
    else r--; // when the nums[mid] = nums[r]
  }
  return nums[l];
};
