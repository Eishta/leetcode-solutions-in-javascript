// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
var convert = function (s, numRows) {
    if (numRows === 1 || s.length < numRows) return s;
    let rows = Array(numRows).fill().map(() => Array());
    let count = 0;
    let reverse = false;

    for (let i = 0; i < s.length; i++) {
        rows[count].push(s[i]);
        if (!reverse) {
            count++;
        }
        else count--;
        if (count == 0 || count == numRows - 1) {
            reverse = !reverse;
        }
    }
    let str = '';
    rows.map(row => str += row.join(''))
    return str;
};