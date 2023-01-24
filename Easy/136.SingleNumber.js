// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

//  Meth0d 1 (done self)
let singleNumber = nums => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) map.set(nums[i], 1);
        else if (map.get(nums[i])) map.delete(nums[i])
    }
    return map.keys().next().value;
}

// Method 2 (reduce)

let single = nums => {
    return nums.reduce((prev, cur) => prev ^ cur);
}