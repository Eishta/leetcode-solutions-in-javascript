// Method 1
// take two pointers and run the loop till the r  reaches the arr length
// move the r forward and keep adding to the current sum till you get the sum >=target
// when sum >=target, starts increasing the l to decrease the window size till the condition holds.
// return the min pointer which keep track of the the window length
// https://www.youtube.com/watch?v=_8xZYo4gA68
var minSubArrayLen = function (target, nums) {
  let [l, r, sum, min] = [0, 0, 0, nums.length + 1];
  while (r < nums.length) {
    sum += nums[r];
    while (target <= sum) {
      sum -= nums[l];
      min = Math.min(min, r - l + 1);
      l++;
    }
    r++;
  }
  return min === nums.length + 1 ? 0 : min;
};
