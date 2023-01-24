// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
//  n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines,
//  which, together with the x-axis forms a container, such that the container contains the most water.

// Input: height = [1,1]
// Output: 1

// Input: height = [4,3,2,1,4]
// Output: 16

// Input: height = [1,2,1]
// Output: 2

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// link:- https://leetcode.com/problems/container-with-most-water/discuss/1069746/JS-Python-Java-C%2B%2B-or-2-Pointer-Solution-w-Visual-Explanation-or-beats-100
var maxArea = function (height) {
    let result = 0, left = 0, right = height.length - 1;
    while (left < right) {
        result = Math.max(result, Math.min(height[left], height[right]) * (right - left));
        height[left] < height[right] ? left++ : right--;
    }
    return result;
};