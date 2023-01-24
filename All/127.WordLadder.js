// BFS
// https://leetcode.com/problems/word-ladder/description/
var ladderLength = function (beginWord, endWord, wordList) {
  let que = [];
  let set = new Set([...wordList]);
  set.delete(beginWord);
  que.push([beginWord, 1]);
  while (que.length) {
    let [word, steps] = que.shift();
    if (word === endWord) return steps;
    // traverse all the cahrs in word to check its replacement with a-z
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        let neW = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
        if (set.has(neW)) {
          set.delete(neW);
          que.push([neW, steps + 1]);
        }
      }
    }
  }
  return 0;
};
