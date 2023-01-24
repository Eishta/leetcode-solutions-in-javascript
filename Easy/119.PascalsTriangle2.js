// Input: rowIndex = 3
// Output: [1,3,3,1]
// Input: rowIndex = 1
// Output: [1,1]
// Input: rowIndex = 0
// Output: [1]
var getRow = function (rowIndex) {
    if (rowIndex === 0) return [[1]];
    else {
        let result = [];
        for (let row = 1; row <= rowIndex + 1; row++) {
            let arr = [];
            for (let col = 0; col < row; col++) {
                if (col === 0 || col === row - 1) {
                    arr.push(1);
                }
                else {
                    arr.push(result[row - 2][col - 1] + result[row - 2][col]);
                }
            }
            result.push(arr);
        }
        return result[rowIndex];
    }
};