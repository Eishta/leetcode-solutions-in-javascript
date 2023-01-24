var threeSumClosest = function (nums, target) {
    let [cur, result, left, right] = [Infinity, 0, 0, nums.length - 1];
    result = nums[left] + nums[1] + nums[right];
    nums.sort((a, b) => a - b);
    for (let [i, num] of nums.entries()) {
        left = i + 1;
        right = nums.length - 1;

        while (left < right) {
            cur = (num + nums[left] + nums[right]);
            if (cur > target) {
                right--;
            }
            else left++;
            if (Math.abs(cur - target) < Math.abs(result - target)) {
                result = cur;
            }

        }
    }
    return result;
};