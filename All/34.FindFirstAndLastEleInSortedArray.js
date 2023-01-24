// My way
// Tags - #again, #binarysearch
var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];
  let f = findFirstOccurence(0, nums.length - 1, target, nums);
  if (f < 0) return [-1, -1];
  let l = findLastOccurence(f, nums.length - 1, target, nums);
  return [f, l];
};

let findFirstOccurence = (start, end, target, nums) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target && (mid === start || nums[mid - 1] !== target)) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] >= target) {
      end = mid - 1;
    }
  }
  return -1;
};
let findLastOccurence = (start, end, target, nums) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target && (mid === end || nums[mid + 1] !== target)) {
      return mid;
    } else if (nums[mid] <= target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
};

// 2nd way

let searchRange = (nums, target) => {
  let res = [-1, -1];
  if (!nums.length) return res;
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) l = mid + 1;
    else r = mid;
  }
  if (nums[l] !== target) return res;
  res[0] = l;
  r = nums.length - 1;
  while (l < r) {
    let mid = Math.ceil((start + end) / 2);
    if (nums[mid] > target) r = mid - 1;
    else l = mid;
  }

  res[1] = r;
  return res;
};
