// You are given a string s and an array of strings words of the same length. 
// Return all starting indices of substring(s) in s that is a concatenation of each word in
//  words exactly once, in any order, and without any intervening characters.
// https://www.youtube.com/watch?v=Bbu4Qjzf7A0
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]


// Tags - #again, #array

var findSubstring = function (s, words) {
    if (!(s && words && words.length && s.length >= words[0].length)) {
        return [];
    }
    let freqMap = {};
    // check frequency of each word
    words.forEach((item) => {
        freqMap[item] = freqMap[item] ? freqMap[item] + 1 : 1;
    })
    // get the total words in array and the length of each word
    let totalWords = words.length;
    let wordLength = words[0].length;
    let result = [];

    // check if the concstinated string length is greater than the given string
    if (s.length < totalWords * wordLength) return [];
    // find the index that can be the last index to start finding the concatinated string
    let loopEnd = s.length - totalWords * wordLength;
    // traverse the given string with i
    for (let i = 0; i <= loopEnd; i++) { // start can be till loopend as when start = loopend, end index = totalwords*wordlength
        // to check in the cuurent string, how many times a word has come
        let seen = {}; 
        // traverse the array with j
        for (let j = 0; j < totalWords; j++) {
            let index = i + j * wordLength;
            let word = s.substr(index, wordLength);
            // break the loop if the word is not present in array
            if (!freqMap[word]) {
                break;
            }
            // count the frequency of the word in the current string
            seen[word] = seen[word] ? seen[word] + 1 : 1;

            // if the freq of word increases the actual frequesncy in the array, then the string is not possible
            if (seen[word] > freqMap[word]) break;
            // if we have reached the last element of array 
            // -> all the words are covered in current string
            // -> add the string index in the result
            if (j + 1 === totalWords) {
                result.push(i);
            }
        }
    }
    return result;
};

// 