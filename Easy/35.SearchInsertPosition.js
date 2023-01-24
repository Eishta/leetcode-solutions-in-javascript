// Link : https://www.youtube.com/watch?v=0A40XJH_VvE
// var searchInsert = function(nums, target) {
//     if(nums.length<=0) return;
//     let m= Math.trunc(nums.length/2);
//     if(target === nums[m])return m;
//     else if(target< nums[m])searchInsert(nums.slice(0,m), target);
//     else searchInsert(nums.slice(m+1), target)

// };
var searchInsert = function (nums, target) {
    const middle = Math.floor(nums.length / 2);
    let offset = 0;
    let result = 0;
    if (target > nums[middle]) {
        result = searchInsert(nums.slice(middle + 1, nums.length), target);
        offset = middle + 1;
    }
    else if (target < nums[middle]) {
        result = searchInsert(nums.slice(0, middle), target);
    }
    else if (target === nums[middle]) {
        result = middle;
    }
    else {
        result = 0;
    }
    return result + offset;
};


// smaller version 
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length;
    while(l<r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid]<target) l= mid+1;  // l will stop at a place where either the nums[mid] is greater than or equal to target
        else r = mid;
    }
    return l;
};