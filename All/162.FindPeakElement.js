// A peak element is an element that is strictly greater than its neighbors.
// Input: nums = [1,2,3,1]
// Output: 2


var findPeakElement = function (nums) {
    if (nums.length == 1) return 0;
    else {
        let [l, r] = [0, nums.length - 1];
        while (l < r) {
            let mid = l + Math.floor((r - l) / 2);
            if (mid > 0 && nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
            else if (nums[mid] < nums[mid + 1]) { l = mid + 1 } // peak lies in the right side
            else r = mid - 1; // peak lies in the left side
        }
        return l;
    }
};