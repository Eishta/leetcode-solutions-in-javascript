
// Given an array nums of integers, return how many of them contain an even number of digits.
function numberOfDigits(n) {
    let x = 0;
    while (n) {
        n = Math.floor(n / 10);
        x++
    }
    console.log(x)
    return x;
}
var findNumbers = function (nums) {
    let max = 0;
    for (let ele of nums) {
        let count = numberOfDigits(ele);
        if ((count | 1) > count) max++
    }
    return max
};

