// Given a string s consists of some words separated by spaces, 
// return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
// let lengthOfLastWord = (s) => {
//     let arr = s.trim().split(' ');
//     if (arr.length <= 0) {
//         return 0;
//     }
//     let str = arr[arr.length - 1];
//     return str.length;
// };


var lengthOfLastWord = function (s) {
    var str = s.trim();
    var len = str.length;
    var i = len - 1;
    while (i >= 0 && str[i] !== ' ') i--;            // takes 68ms when i-- is not surrounded by {}
    return len - 1 - i;
};

var lengthOfLastWord = function (s) {
    let str = s.trim();
    let len = str.length;
    let i = len - 1;
    while (i >= 0 && str[i] !== ' ') {                // takes 80ms becuse of block
        i--;
    }
    return len - 1 - i;
};