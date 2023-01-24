// numArr = [2,3,4,5,6,7] & target = 9
// return the indices of the numbers that sum upto the target 
// here => 4 and 5 so it returns => [2,3]
// x + y = target => y = target -x
// if x = 4 then y = target - 4
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

let twoSum = (numArr, target) => {
    // create a map 
    let numMap = newMap();
    let complement=0;
    // loop on the array
    for (let i = 0; i < numArr.length; i++) {
        complement = target - numArr[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]
        }
        numMap.set(numArr[i], i);
    }

}

