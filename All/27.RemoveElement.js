// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
var removeElement = function (nums, val) {
    let c = -1, n = 0;
    while (n < nums.length) {
        if (nums[n] !== val) {
            c++;
            [nums[c], nums[n]] = [nums[n], nums[c]];
            n++;
        }
        else { n++; }
    }
    return c + 1;
};


// Solution:
// LOOP STARTS
// loop till n reaches array end
// search for a number that is not equal to the 'val'
//  increament c so that it points the index which contains val
//  swap the elements at n and c 
//  increament n
// else 
//  increament n if it points to val
// LOOP ENDS
// END: return c + 1 as it points to the last element swapped so the length becomes c+1