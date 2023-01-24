// You are given an integer array nums. You are initially positioned at the array's first index, 
// and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Input: nums = [2,3,1,1,4]
// Output: true
//  https://www.youtube.com/watch?v=muDPTDrpS28
let jump = nums => {
    let reachable = 0;
    for (let i = 0; i < nums.length; i++) {
        if (reachable < i) return false; //when i reaches a point which is not reachable yet
        reachable = Math.max(reachable, i + nums[i]);
    }
    return true;
}