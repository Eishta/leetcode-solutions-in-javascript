// 2401. Longest Nice Subarray
// Link - https://leetcode.com/problems/longest-nice-subarray/


var longestNiceSubarray = function (nums) {
    if (nums.length === 1) return 1;

    let start = 0; // start of window
    let end = 1  // end of window
    let max = 1;

    while (end < nums.length) {
        let allNice = true
        let currWindowStart;
        for (currWindowStart = end - 1; currWindowStart >= start; currWindowStart--) {
            const firstNum = nums[end];
            const secondNum = nums[currWindowStart];
            if ((firstNum & secondNum) !== 0) {
                allNice = false
                break
            }
        }

        if (allNice) {
            max = Math.max(max, end - start + 1);
            end++
        } else {
            start = currWindowStart + 1;
        }
    }

    return max;
};