// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Method1
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle)
};

// Method2
var strStr = function (haystack, needle) {
    if (!needle.length) return 0;
    else {
        let [i, j] = [0, 0];
        while (i < haystack.length && j < needle.length) {
            if (haystack[i] == needle[j]) {
                i++; j++
            }
            else {
                i = i - j + 1; // skip the first element from which needle started matching
                j = 0;  // reset for the needle as the comparison will again start from 0
            }
        }
        return j == needle.length ? i - j : -1 // loop ends when j becomes equal to needle.length 
    }
};