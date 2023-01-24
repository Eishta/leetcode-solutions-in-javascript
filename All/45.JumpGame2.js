// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// find  minimum number of jumps.

// Input: nums = [2,3,1,1,4]
// Output: 2
// Greedy 
// https://www.youtube.com/watch?v=dJ7sWiOoK7g

let jump1 = (nums) => {
    let [l, r] = [0, 0];
    let result = 0; // stores the number of jumps
    while (r < nums.length - 1) { // excluding the last element as we dont want to run the loop once we have reached the last element
        let farthest = 0;
        for (let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        l = r + 1;
        r = farthest;
        result++;
    }
    return result;
}


// DP
// https://www.youtube.com/watch?v=phgjL7SbsWs
var jump2 = function (nums) {
    let dp = Array(nums.length);
    dp[nums.length - 1] = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        let min = Infinity;
        let steps = nums[i];
        for (let j = 1; j <= steps && i + j < nums.length; j++) {
            if (dp[i + j] != null && dp[i + j] < min) {
                min = dp[i + j]
            }
            if (min !== Infinity) {
                dp[i] = min + 1;
            }
        }
    }
    return dp[0];
};

// example= jump([3,3,0,2,1,2,4,2,0,0])

// dp = [4, 4, empty, 3, 3, 2, 1, 1, empty, 0]

// ans = 4