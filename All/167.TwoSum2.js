// Given an array of integers numbers that is already sorted in non-decreasing order,
//  find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2,
//  where 1 <= answer[0] < answer[1] <= numbers.length.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// two pointer solution

let twoSum = (nums, target) =>{
    let i = 0; j=nums.length-1;
    let sum = nums[i] + nums[j];
    while(sum !== target){
        sum< target ? i++ : j--;
        sum = nums[i] + nums[j];
    }
    return [i+1, j+1]
}

//----------------------------------------------------
var twoSum = function(nums, target) {
    let [i,j]=[0,nums.length-1];
    while(i<j){
        let sum = nums[i]+nums[j];
        if(sum===target)return [i+1,j+1];
        else if(sum>target)j--;
        else i++;
    }
};