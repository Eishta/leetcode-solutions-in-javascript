// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example:
// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

let minAbsDiff = (arr) => {
  // sort the array
  arr.sort((a, b) => a - b);
  // max diff can be the last element in sorted array as
  let minDiff = arr[arr.length - 1];
  // pair is the array to be added in each key where key = diff, value = array of pairs that give that diff
  let pair = [],
    diff = Infinity;
  // object to contain the key value pair
  let map = {};
  // loop till arrays second last elemnet as we use pairs in the loop
  for (let i = 0; i < arr.length - 2; i++) {
    pair = [arr[i], arr[i + 1]];
    diff = pair[1] - pair[0];

    minDiff = Math.min(minDiff, diff);
    if (map[diff]) {
      map[diff].push(pair);
    } else map[diff] = pair;
  }
  return map[minDiff];
};
