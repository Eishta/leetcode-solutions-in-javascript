// Given an integer array nums,
//  return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false


let containsDuplicate = A =>{
    let map = new Map();
    for(let i=0;i<A.length;i++){
        if(map.get(nums[i])) return true;
        map.set(nums[i],1);

    }
    return false
}