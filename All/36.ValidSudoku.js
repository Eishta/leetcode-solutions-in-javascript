// https://www.youtube.com/watch?v=rJ9NFK9s_mI

// loop through all the elements
// skip '.'
// store a string with row , col and the box number in which the number is present in a set, as the number needs to be unique in all these
// if the same string is present already , return false


var isValidSudoku = function (board) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                let row = `row${i}${board[i][j]}`,
                    col = `col${j}${board[i][j]}`,
                    box = `box${Math.floor(i / 3) * 3 + Math.floor(j / 3)}${board[i][j]}`
                if (set.has(row) || set.has(col) || set.has(box)) return false;
                else {
                    set.add(row).add(col).add(box);
                }
            }
        }
    }
    return true;
};