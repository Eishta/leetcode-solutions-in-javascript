// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.

// Input: nums = [1,2,3]
// Output: [1,3,2]

// LINK:- https://www.youtube.com/watch?v=LuLCLgMElus

/** Intuition:-
 *  * we need to find the direct bigger number than the given one - example 13542 -> 14235 & 15234 both are the next permutations but
 *  * 14235 is the closestnext permutation
 *  Steps:-
 * 1. start from end and linearly search for an index where the a[i] < a[i+1] Why?   |i = 1|
 *   * we need the closest permutation -> 13542 -> i =1  => a[i]=3,  542 is the biggest number in the combination of 5,4,2
 *   * so we need a number which can be swapped with this combo to make an even bigger number -> 3 can be swapped with 4 or 5
 * 2. find an index j such that a[j] > a[i] => a[j] can be 4,5 but 4 we choose 4 bcz we need the closest permutaion  |j=3|
 * 3. Swap i,j => 14532 , if we have chosen 5 => 15432> 14532 & is not the closest to 13542   => after swap =>|output = 14532|
 * 4. after 4 we want the smallest number possible => it should be the increasing order of the next numbers=> 235
 *   * which is reverse of the numbers 532
 *   * reverse the next elements after index i=> i+1 to last
 */
// https://youtu.be/TOvWyFT0xCw

// Tags - #again

var nextPermutation = function (nums) {
  // find the element from right such that a[i]<a[i+1]
  let ins = nums.length - 2; // avoid last element as i+1 is processed
  while (ins >= 0 && nums[ins] >= nums[ins + 1]) ins--;
  if (ins >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[ins]) j--;
    [nums[ins], nums[j]] = [nums[j], nums[ins]];
  }
  nums = reverse(ins + 1, nums.length - 1, nums);
  return nums;
};
let reverse = (start, end, arr) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};
