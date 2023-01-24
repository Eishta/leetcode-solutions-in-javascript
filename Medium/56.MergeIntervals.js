// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
//  and return an array of the non-overlapping intervals that cover all the intervals in the input.

//  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Cases: [[1,4],[2,3]]
// [[1,3],[2,6],[8,10],[15,18]]
// [[1,4],[4,5]]
var merge = function (intervals) {
    if (intervals.length < 2) return intervals;
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let stack = [];
    stack.push(intervals[0])
    for (let i = 0; i < intervals.length; i++) {
        let top = stack[stack.length - 1];
        if (top[1] >= intervals[i][0]) {
            top = stack.pop();
            top[0] = Math.min(intervals[i][0], top[0]);
            top[1] = Math.max(intervals[i][1], top[1]);
            stack.push(top)
        } else {
            stack.push(intervals[i])
        }
    }
    return stack;
};