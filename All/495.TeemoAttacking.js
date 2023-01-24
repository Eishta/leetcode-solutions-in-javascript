// Input: timeSeries = [1,4], duration = 2
// Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

// Input: timeSeries = [1,2], duration = 2
// Output: 3
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
// Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.
// My solution
var findPoisonedDuration = function (a, duration) {
    let cur = 0, next = 0, count = 0;
    for (let i = 0; i < a.length; i++) {
        if (!a[i + 1] || a[i] + duration - 1 < a[i + 1]) {
            count += duration;
        }
        else {
            count += a[i + 1] - a[i]
        }
    }
    return count;
};

// leetcode solution
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0 ) return 0; 
    let res = duration;
    for (let i = 1; i < timeSeries.length; i++) {
            res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    return res; 
};