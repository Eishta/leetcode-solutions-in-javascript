// Link: https://leetcode.com/problems/maximum-number-of-pairs-in-array/


var numberOfPairs = function (nums) {
    let answer = [0, nums.length];
    let i = 0, j = nums.length - 1;
    while (i < j && i != nums.length) {
        while (i < j && nums[i] < 0) i++;
        while (i < j && nums[j] < 0) j--;
        if (i == j && i != nums.length) {
            i++;
            j = nums.length - 1
        }
        if (i < j && nums[i] >= 0 && nums[j] >= 0 && nums[i] == nums[j]) {
            // found a pair - delete
            nums[i] = -nums[i];
            nums[j] = -nums[j];
            answer[0]++;
            answer[1] -= 2;
            console.log([nums[i], nums[j]])
            i++;
            j = nums.length - 1;

        }

        else j--;
        if (i == j && i != nums.length) {
            i++;
            j = nums.length - 1
        }

    }
    return answer;

};


// not working 
// numberOfPairs([82,51,81,25,57,88,82,63,96,73,37,63,82,90,21,42,49,68,84,14,11,14,2,60,71,88,65,3,58,13,100,25,34,24,73,35,60,28,99,7,90])


var numberOfPairs = function (nums) {
    let map = {}, pairs = 0;
    for (let n of nums) {
        if (map[n]) map[n]++;
        else map[n] = 1;
        if (map[n] % 2 == 0) pairs++
    }
    return [pairs, nums.length - (pairs * 2)]


};