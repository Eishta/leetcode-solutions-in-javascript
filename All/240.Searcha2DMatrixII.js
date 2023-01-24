// we start from the last index of 1st row bcz , we stand at a point where the list is descending towards the left and ascending towards the bottom
// so if the current ele of matrix is less than target and we need a greater number we move down i.e. i++ else if we want a smaller number we move left j--
// https://www.youtube.com/watch?v=ZYpYur0znng
var searchMatrix = function (matrix, target) {
    let rows = matrix.length;
    let column = matrix[0].length;
    let i = 0, // first row
        j = column - 1;

    while (i < rows && j >= 0) {  // until the pointers go out of bound the matrix
        if (matrix[i][j] === target) return true;
        else if (matrix[i][j] > target) {
            j--;   // move left when curEle is greater than target
        }
        else i++; // move right when curEle is smaller than target
    }
    return false;

};