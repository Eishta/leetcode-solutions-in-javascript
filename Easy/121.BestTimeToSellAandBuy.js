let maxProfit = nums => {
    let min = Infinity;          // min price till now
    let max = 0;                 // max profit till now
    nums.forEach(e => {
        min > e && (min = e);
        max < e - min && (max = e - min);
    })
    return max;
}