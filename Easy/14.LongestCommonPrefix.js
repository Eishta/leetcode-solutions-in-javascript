// Input: strs = ["flower","flow","flight"]
// Output: "fl"


// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// First find the shortest string in the array; the length of this string is the maximum length of our prefix
// this is because a prefix can't be longer than the word it inhabits
// Next we iterate from index 0 to maxPrefixLength - 1
// We use this index to check the corresponding character of each string together and compare them
// This is easily done using Array.every
// If all characters at index i match, then we add it to our prefix result string
// As soon as we hit one mismatch, that's the end of the common prefix and we break out of our loop
// return prefix at the end, which may be empty

// Method 1
var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
        let char = strs[0][i];
        if (strs.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    };
    return prefix;
};


// Method 2
var longestCommonPrefix = function (strs) {
    let prefix = '';
    if (strs.length <= 1) {
        return strs[0]
    }
    for (let i = 0; i <= strs[0].length; i++) {
        prefix = strs[0].slice(0, i);

        let isCommon = strs.every(str => str.slice(0, prefix.length) === prefix);
        if (!isCommon) {
            prefix = prefix.slice(0, -1);
            break;
        }

    }
    return prefix;
};


// Method 3 
var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0]
    let prefix = '';
    let commonPrefix = '';
    let first = strs[0];
    strs = strs.slice(1);
    for (let i in first) {
        prefix += first[i];
        for (let str of strs) {
            if (!str.startsWith(prefix)) {
                return commonPrefix;
            }
        }
        commonPrefix = prefix;
    }
    return commonPrefix;
};