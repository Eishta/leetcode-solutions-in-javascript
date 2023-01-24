// Link: https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/

function summ(n) {
    let sum = 0;

    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10)
    }
    return sum
}
var maximumSum = function (nums) {
    let map = {};
    let res = -1;
    for (let ele of nums) {
        let s = summ(ele);
        if (map[s]) {
            res = Math.max(ele + map[s], res)
            map[s] = Math.max(ele, map[s])
        } else map[s] = ele
    }
    return res
};
