let moveZeroes = (nums)=> {
    if(nums.length <=1)return nums;
    let i = -1;

    for(let j =0; j<nums.length; j++ ){
        if(nums[j]!==0){
            i++;
            [nums[i], nums[j]]=[nums[j], nums[i]]
        }
    }
    return nums;
};