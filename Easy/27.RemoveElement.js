// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
var removeElement = function (nums, val) {
    let i = -1, j = 0;
    while (j < nums.length) {
        if (nums[j] !== val) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
        else { j++; }

    }
    return i + 1;
};


// Solution:
// LOOP STARTS
// loop till j reaihes array end
// search for a number that is not equal to the 'val'
// // increament i so that it points the index which contains val
// // swap the elements at j and i 
// // increament j
// else 
//  // increament j if it points to val
// LOOP ENDS
// END: return i + 1 as it points to the last element swapped so the length becomes i+1