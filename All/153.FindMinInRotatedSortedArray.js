// Suppose an array of length n sorted in ascending order is rotated between 1 and n times
//https://www.youtube.com/watch?v=IzHR_U8Ly6c
// https://www.youtube.com/watch?v=j3187M1P2Xg   = easier and have 154 also
// Input: nums = [3,4,5,1,2]
// Output: 1

var findMin = function (nums) {
  if (!nums.length) return -1;
  else if (nums.length === 1) return nums[0];
  else {
    let [l, r] = [0, nums.length - 1];
    while (l < r) {
      let mid = l + Math.floor((r - l) / 2);
      if (mid > 0 && nums[mid] < nums[mid - 1]) return nums[mid];
      else if (nums[mid] >= nums[l] && nums[mid] > nums[r]) {
        // left is sorted , right is unsorted , move to right to search
        l = mid + 1;
      }
      // move to left as it is unsorted
      else r = mid - 1;
    }
    return nums[l];
  }
};
