// Maximum Score Of Spliced Array
// User Accepted:1907
// User Tried:2831
// Total Accepted:1930
// Total Submissions:4138
// Difficulty:Hard
// You are given two 0-indexed integer arrays nums1 and nums2, both of length n.

// You can choose two integers left and right where 0 <= left <= right < n and swap the subarray nums1[left...right] with the subarray nums2[left...right].

// For example, if nums1 = [1,2,3,4,5] and nums2 = [11,12,13,14,15] and you choose left = 1 and right = 2, nums1 becomes [1,12,13,4,5] and nums2 becomes [11,2,3,14,15].
// You may choose to apply the mentioned operation once or not do anything.

// The score of the arrays is the maximum of sum(nums1) and sum(nums2), where sum(arr) is the sum of all the elements in the array arr.

// Return the maximum possible score.

// A subarray is a contiguous sequence of elements within an array. arr[left...right] denotes the subarray that contains the elements of nums between indices left and right (inclusive).


// Input: nums1 = [60,60,60], nums2 = [10,90,10]
// Output: 210
// Explanation: Choosing left = 1 and right = 1, we have nums1 = [60,90,60] and nums2 = [10,60,10].
// The score is max(sum(nums1), sum(nums2)) = max(210, 80) = 210.

// Input: nums1 = [7,11,13], nums2 = [1,1,1]
// Output: 31
// Explanation: We choose not to swap any subarray.
// The score is max(sum(nums1), sum(nums2)) = max(31, 3) = 31.


var maximumsSplicedArray = function (nums1, nums2) {
    let n = nums1.length;
    if(n ==1)return Math.max(nums1[0], nums2[0])
    let dp = Array(n).fill().map(ele => Array(n).fill(0));
    function solve(left, right) {
        if (left > right || left < 0 || right > nums1.length) return -1e9;
        if (dp[left][right]) return dp[left][right];

        let swaped = swap(left, right, [...nums1], [...nums2]);
        let notS = Math.max(sum(nums1), sum(nums2));
        dp[left][right] = Math.max(swaped, notS)
        return dp[left][right];
    }
    let max = -Infinity;
    for (let length = 1; length < n; length++) {
        for(let left = 0;left < n-length;left++){
            let right = left + length -1;
            if(dp[left][right]){
                max = Math.max(max, dp[left][right]);
            }
            else max = Math.max(max, solve(left, right));
        }
    }
    return max;
};

function sum(arr) {
    return arr.reduce((acc, ele) => ele + acc, 0);
}

function swap(left, right, a, b) {
    for (let i = left; i <= right; i++) {
        [a[i], b[i]] = [b[i], a[i]];
    }
    return Math.max(sum(a), sum(b));
}


// Heap out of memory 
// FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory


// int maximumsSplicedArray(vector<int>& a, vector<int>& b) {
//     int ans=0;
//     for (int rep=0; rep<2; ++rep) {
//         int x=accumulate(a.begin(), a.end(), 0);
//         int best=0, sum=0;
//         ans=max(ans, x);
//         for (int i=0; i<a.size(); ++i) {
//             int cur=b[i]-a[i];
//             best=max(best+cur, cur);
//             ans=max(ans, x+best);
//         }
//         swap(a, b);
//     }
//     return ans;
// }