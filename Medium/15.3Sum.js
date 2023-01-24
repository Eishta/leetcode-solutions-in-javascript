var threeSum = function (nums) {
    let [sol, left, right] = [[], 0, nums.length - 1];
    if (nums.length < 3) return sol;
    nums.sort((a, b) => a - b); // easy to remove duplicates 

    for (let [i, num] of nums.entries()) {
        if (num > 0) return sol; // as soon as the positive numbers start coming , the sum cannot be 0. so stopn and return the result 
        if (num === nums[i - 1]) continue; // avoid duplicates
        left = i + 1;
        right = nums.length - 1;

        while (left < right) {
            let temp = num + nums[left] + nums[right];
            if (temp === 0) {
                sol.push([num, nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
            else if (temp > 0) {
                right--;
            }
            else if (temp < 0) {
                left++;
            }
        }
    }
    return sol;

};

