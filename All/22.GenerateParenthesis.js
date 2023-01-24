// Given n pairs of parentheses, 
// write a function to generate all combinations of well-formed parentheses.
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Tags - #again
var generateParenthesis = function (n) {
    let res = [];
    findAll('(', 1, 0, res, n);
    return res;
};

const findAll = function (cur, o, c, res, n) {
    if (cur.length === 2 * n) {
        res.push(cur);
        return;
    }
    if (o < n) findAll(cur + '(', o + 1, c, res, n); // increment 1 in o when open bracket is added
    if (c < o) findAll(cur + ')', o, c + 1, res, n) // increment 1 in c when close bracket is added
}