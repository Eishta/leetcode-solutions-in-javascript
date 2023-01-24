// https://www.geeksforgeeks.org/maximum-product-subarray/
var maxProduct = function (nums) {
  // overall maxsofar to store the max product
  let max_so_far = nums[0],
    // min - to store the min number till now as min(-ve) * -ve may give the maxsofar, min negative product ending at i
    min = nums[0],
    // max - max positive product ending at i
    max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // we take temp as max is getting used in calculating min in the next statement, after that we change max
    let temp = Math.max(nums[i], max * nums[i], min * nums[i]);
    min = Math.min(nums[i], max * nums[i], min * nums[i]);
    max = temp;
    max_so_far = Math.max(max_so_far, max);
  }
  return max_so_far;
};
