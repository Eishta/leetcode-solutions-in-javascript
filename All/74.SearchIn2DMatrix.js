// #BinarySearch, #matrix
// Link - https://www.youtube.com/watch?v=ZYpYur0znng
var searchMatrix = function (matrix, target) {
    let cols = matrix[0].length;
    let rows = matrix.length;
    let r = rows * cols - 1;
    let l = 0;
    let mid, row, col;
    while (l <= r) {
        mid = l + Math.floor((r - l) / 2);
        row = Math.floor(mid / cols);
        col = mid % cols;
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) r = mid - 1;
        else l = mid + 1;
    }
    return false;
};
