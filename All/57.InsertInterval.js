// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]


var insert = function (intervals, newI) {
    if (intervals && !intervals.length) return [newI]
    let res = [];
    for (let cur of intervals) {
        // if cur ends before the new interval
        if (cur[1] < newI[0]) {
            res.push(cur);
        }
        // if new interval ends before the cur interval, push the new interval 
        else if (newI[1] < cur[0]) {
            res.push(newI);
            newI = cur;
        }
        else {// nothing is pushed and the newI is updated as the cur and newI merge 
            newI[0] = newI[0] > cur[0] ? cur[0] : newI[0];  // min Math.min(cur[0], newI[0])
            newI[1] = newI[1] > cur[1] ? newI[1] : cur[1];  // max Math.max(cur[1], newI[1])
        }
    }
    res.push(newI);
    return res;
};