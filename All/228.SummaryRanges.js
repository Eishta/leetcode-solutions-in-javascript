// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]

// Input: nums = [-1]
// Output: ["-1"]

// my solution
var summaryRanges = function (nums) {
    let l = 0, r = 0, s = [];
    while (r < nums.length) {
        if (nums[r] + 1 !== nums[r + 1]) {
            s.push(l !== r ? `${nums[l]}->${nums[r]}` : `${nums[l]}`);
            l = r + 1;
        }
        r++;
    }
    return s;
};