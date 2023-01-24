
// A square matrix is said to be an X-Matrix if both of the following conditions hold:

// All the elements in the diagonals of the matrix are non-zero.
// All other elements are 0.


// Input: grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]
// Output: true

// Input: grid = [[5,7,0],[0,3,1],[0,5,0]]
// Output: false

var checkXMatrix = function (grid) {
    let n = grid.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i == j && grid[i][j] == 0) || (i + j == n - 1 && grid[i][j] == 0) || (i !== j && i + j !== n - 1 && grid[i][j] != 0)) return false;

        }
    }
    return true;
};