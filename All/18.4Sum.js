// Given an array and target
// nums[a] + nums[b] + nums[c] + nums[d] == target

// Tags - #again
var fourSum = function (nums, target) {
    const res = [];
    let n = nums.length;
    if (!(nums && nums.length)) return;
    
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let target2 = target - nums[i] - nums[j];
            let [l, r] = [j + 1, n - 1];
            while (l < r) {
                let twoSum = nums[l] + nums[r];
                if (twoSum > target2) r--;
                else if (twoSum < target2) l++;
                else {
                    let quad = [nums[i], nums[j], nums[l], nums[r]];
                    res.push(quad);
                    l++;
                    r--;
                    while (l < r && nums[l] == nums[l - 1]) l++;
                    while (l < r && nums[r] === nums[r + 1]) r--;
                }
            }
            while (j + 1 < n && nums[j + 1] == nums[j]) j++;
        }
        while (i + 1 < n && nums[i + 1] == nums[i]) i++;
    }
    return res;
};