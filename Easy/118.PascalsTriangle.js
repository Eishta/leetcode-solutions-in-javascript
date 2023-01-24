var generate = function (numRows) {
    if (numRows === 0) return [];
    else if (numRows === 1) return [[1]];
    else {
        let result = [];
        for (let row = 0; row < numRows; row++) {
            let arr = [];
            for (let col = 0; col <= row; col++) {

                if (col === 0 || col === row) {
                    arr.push(1);
                }
                else {
                    arr.push(result[row - 1][col - 1] + result[row - 1][col]);
                }
            }
            result.push(arr);
        }
        return result;
    }
};