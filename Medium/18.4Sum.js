// Given an array and target
// nums[a] + nums[b] + nums[c] + nums[d] == target
var fourSum = function (nums, target) {
    const res = [];
    let n = nums.length;
    if (!(nums && nums.length)) return;
    
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let target2 = target - nums[i] - nums[j];
            let [front, end] = [j + 1, n - 1];
            while (front < end) {
                let twoSum = nums[front] + nums[end];
                if (twoSum > target2) end--;
                else if (twoSum < target2) front++;
                else {
                    let quad = [nums[i], nums[j], nums[front], nums[end]];
                    res.push(quad);
                    front++;
                    end--;
                    while (front < end && nums[front] == nums[front - 1]) front++;
                    while (front < end && nums[end] === nums[end + 1]) end--;
                }
            }
            while (j + 1 < n && nums[j + 1] == nums[j]) j++;
        }
        while (i + 1 < n && nums[i + 1] == nums[i]) i++;
    }
    return res;
};