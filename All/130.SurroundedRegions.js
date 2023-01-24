
var solve = function (board) {
    if (!board.length) return;
    // first and last column, check if any O or all the connected O to the border line O, and change them to 1
    for (let i = 0; i < board.length; i++) {
        dfs(i, 0);
        dfs(i, board[0].length - 1)
    }
    // first and last row, check if any O or all the connected O to the border line O, and change them to 1
    for (let i = 0; i < board[0].length; i++) {
        dfs(0, i);
        dfs(board.length - 1, i);
    }
    // traverse through the board , if 1 is found change it to O, if O is found change it to X
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 1) board[i][j] = 'O';
            else if (board[i][j] === 'O') board[i][j] = 'X';
        }
    }

    function dfs(i, j) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === 1 || board[i][j] === 'X') return
        // mark the O to 1 and traverse for all the connected O
        board[i][j] = 1;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
};