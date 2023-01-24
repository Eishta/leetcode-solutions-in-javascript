// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

var search = function (nums, target) {

    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        if (nums[mid] === target) {
            return true;
        }
        // only diff condition then question part 1
        if (nums[mid] === nums[l] && nums[r] === nums[mid]) {
            r--; l++; // avoiding the duplicates
        }
        // if left part is sorted
        else if (nums[mid] >= nums[l]) {
            if (target >= nums[l] && target <= nums[mid]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else {
            if (target >= nums[mid] && target <= nums[r]) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
    }
    return false;
};

