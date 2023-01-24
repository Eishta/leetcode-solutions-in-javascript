// Link- https://www.youtube.com/watch?v=oTfPJKGEHcc

// Example-
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// trick - we are able to find which part the target lies only by making use of the sorted part
// how- check which part is sorted then check if the elemnet lies btw the start and end of that sorted part -> 
// if yes update the l and r to the sorted part else move to the unsorted part

// Method 1
// T(n) = O(logn);
// one pass solution
// binary search
// Tags - #again, #binarysearch
var search = function (nums, target) {

    let [l, r, mid] = [0, nums.length - 1, 0];
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] >= nums[l]) { // if left part is sorted
            if (target >= nums[l] && target <= nums[mid]) { // if target lies in the left part
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else { // if left part is unsorted - right part is sorted
            if (target >= nums[mid] && target <= nums[r]) { // if target lies in the right sorted part
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
    }
    return -1;
};

// Method 2
// T(n) = O(2logn)
// 2pass-> 1st - find the pivot element and then find the target