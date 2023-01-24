// https://leetcode.com/problems/set-matrix-zeroes/solutions/1477825/javascript-three-solutions-one-is-suggested-transcribed-to-js-100/?languageTags=javascript

var setZeroes = function (matrix) {
    let track = [];

    // find the index pairs of 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) track.push([i, j]);
        }
    }

    // update the rows and columns
    for (let i = 0; i < track.length; i++) {
        let [x, y] = track[i];
        // update the row
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[x][col] = 0
        }
        // update the col
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][y] = 0
        }
    }
};