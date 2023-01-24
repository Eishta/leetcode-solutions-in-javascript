var findPairs = function (nums, k) {
    let map = {}, count = 0;
    nums.forEach(n => map[n] = (map[n] || 0) + 1);

    Object.keys(map).forEach(key => {
        if (k === 0) {  // count all the numbers that occur more than one time
            if (map[key] > 1) count++;
        } else {
            if (map[+key + k]) count++;
        }
    })
    return count;
};


// nums = [3, 1, 4, 1, 5], k = 2
// Output: 2

//     (1, 3) and(3, 5).