// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// we can check the stack top only when we hit the closing bracket , so the stack will contain the oping brackets and the stack pop is done when closing bracket is seen.
var isValid = function (s) {
    let stack = [];
    let map = new Map();
    map.set(')', '(');
    map.set('}', '{');
    map.set(']', '[');

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let top = stack.length ? stack.pop() : '#';
            if (top !== map.get(s[i])) return false;
        }
        else stack.push(s[i])
    }
    return !stack.length ? true : false;

};