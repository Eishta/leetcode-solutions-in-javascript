/**
 * count =>keeps a count of the disticnt chars in the 't' and decreases if all the occureneces of that char in 't' have been covered in the current substring
 * map => chars in 't' and their frequency
 * left=> marks the start of the substring
 * right=> marks the end of the substring
 * 1. we start moving right towards s.length until the count becomes 0=> that is all keys in map have values = 0
 * 2. when count becomes 0, we start moving left until we can remove the unwanted chars from min
 * 
 * main aim is to have all chars in map value=0
 * and count =0, min having the substring with the min length
 */

// Tags - #again
var minWindow = function (s, t) {
    let map = {};
    // count the chars and the numebr of times the char occurs in t
    t.split('').forEach(ele => {
        if (map[ele]) map[ele]++;
        else map[ele] = 1;
    })
    // count the number of distinct chars in t
    let count = Object.keys(map).length;
    let left = 0,
        right = -1,
        min = '';  // stores the min length substring
    while (right < s.length) {
        // if all the chars of t are covered in 'min'
        if (count == 0) {
            let cur = s[left];
            // we are excluding the chars at left, so it means the char if in 't', its count will increase in map
            if (map[cur] != undefined) map[cur]++;
            if (map[cur] > 0) count++;
            let temp = s.substring(left, right + 1);
            if (min === '') min = temp;
            else min = min.length < temp.length ? min : temp;
            left++;
        }
        // if chars are remaining in t
        else {
            right++;
            let current = s[right];
            // if the char current occurs in t, reduce the count of that char in map
            if (map[current] !== undefined) {
                map[current]--;
            }
            // all occurences of current are covered in string btw left and right
            if (map[current] == 0) count--;
        }
    }
    return min;
};

